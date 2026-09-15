#!/usr/bin/env python3
"""
StyloDyna Customer Identity Integrity Verifier (CAT-UI-002M)
Validates identity locks, master asset SHA-256 hashes, registry consistency, file existence, and storefront avatar derivatives.
"""
import os
import sys
import json
import hashlib

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CUST_DIR = os.path.join(BASE_DIR, "docs", "customer-identities")
REGISTRY_PATH = os.path.join(CUST_DIR, "CUSTOMER-IDENTITY-REGISTRY.json")
IDENTITIES_DIR = os.path.join(CUST_DIR, "identities")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

EXPECTED_IDS = ["SD-CUST-001", "SD-CUST-002", "SD-CUST-003", "SD-CUST-004", "SD-CUST-005"]

def calculate_sha256(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()

def verify_customer_identities():
    print("==================================================")
    print(" STYLODYNA CUSTOMER IDENTITY INTEGRITY VERIFIER")
    print("==================================================")

    if not os.path.exists(REGISTRY_PATH):
        print(f"[FAIL] Registry file missing: {REGISTRY_PATH}")
        return False

    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        registry_data = json.load(f)

    reg_identities = registry_data.get("identities", [])
    
    seen_ids = set()
    seen_masters = set()
    seen_hashes = set()
    
    passed_count = 0

    for cid in EXPECTED_IDS:
        print(f"\nVerifying {cid}...")
        cid_dir = os.path.join(IDENTITIES_DIR, cid)
        
        # Check required files
        req_files = ["identity.json", "prompt.md", "usage.md"]
        missing_req = [rf for rf in req_files if not os.path.exists(os.path.join(cid_dir, rf))]
        if missing_req:
            print(f"[FAIL] {cid}: Missing required files {missing_req}")
            continue

        id_json_path = os.path.join(cid_dir, "identity.json")
        with open(id_json_path, "r", encoding="utf-8") as f:
            id_data = json.load(f)

        # Check unique ID
        if id_data.get("customer_id") != cid:
            print(f"[FAIL] {cid}: Mismatched customer_id in identity.json")
            continue
        
        if cid in seen_ids:
            print(f"[FAIL] {cid}: Duplicate customer_id encountered")
            continue
        seen_ids.add(cid)

        # Check lock state
        if not id_data.get("identity_lock") or id_data.get("status") != "IDENTITY_LOCKED":
            print(f"[FAIL] {cid}: Identity is not locked (status={id_data.get('status')})")
            continue

        # Check master file
        m_info = id_data.get("master_asset", {})
        m_filename = m_info.get("expected_filename")
        m_path = os.path.join(cid_dir, "master", m_filename)
        
        if not os.path.exists(m_path):
            print(f"[FAIL] {cid}: Master file missing: {m_path}")
            continue

        if m_path in seen_masters:
            print(f"[FAIL] {cid}: Duplicate master path: {m_path}")
            continue
        seen_masters.add(m_path)

        # Hash check
        actual_hash = calculate_sha256(m_path)
        expected_json_hash = m_info.get("sha256")
        
        if actual_hash != expected_json_hash:
            print(f"[FAIL] {cid}: Hash mismatch in identity.json! Actual: {actual_hash}, JSON: {expected_json_hash}")
            continue

        if actual_hash in seen_hashes:
            print(f"[FAIL] {cid}: Duplicate master SHA-256 hash across locked identities: {actual_hash}")
            continue
        seen_hashes.add(actual_hash)

        # Registry check
        reg_entry = next((item for item in reg_identities if item.get("customer_id") == cid), None)
        if not reg_entry:
            print(f"[FAIL] {cid}: Missing from registry identities array")
            continue

        if reg_entry.get("master_sha256") != actual_hash:
            print(f"[FAIL] {cid}: Registry hash mismatch! Actual: {actual_hash}, Registry: {reg_entry.get('master_sha256')}")
            continue

        if not reg_entry.get("identity_lock") or reg_entry.get("status") != "IDENTITY_LOCKED":
            print(f"[FAIL] {cid}: Registry entry is not locked")
            continue

        # Storefront derivative check
        deriv_name = f"{cid.lower()}-avatar.webp"
        deriv_path = os.path.join(ASSETS_DIR, deriv_name)
        if not os.path.exists(deriv_path):
            print(f"[FAIL] {cid}: Storefront derivative missing: {deriv_path}")
            continue

        print(f"[PASS] {cid}: Identity locked, master SHA-256 match ({actual_hash[:12]}...), storefront derivative present ({deriv_name}).")
        passed_count += 1

    print("\n==================================================")
    print(f" RESULT: CUSTOMER_IDENTITIES: {passed_count}/{len(EXPECTED_IDS)} PASS")
    print("==================================================")
    
    return passed_count == len(EXPECTED_IDS)

if __name__ == "__main__":
    success = verify_customer_identities()
    sys.exit(0 if success else 1)
