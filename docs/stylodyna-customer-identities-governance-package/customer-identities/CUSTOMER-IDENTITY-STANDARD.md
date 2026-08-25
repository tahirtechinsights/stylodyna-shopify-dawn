# CUSTOMER IDENTITY STANDARD

**System:** StyloDyna Customer Identity System  
**Scope:** Global — all departments, categories, review assets, UGC-style creative, social and advertising  
**Status:** Governance Foundation

## 1. Purpose

This standard prevents identity drift, duplicate-looking customers, accidental face reuse, and inconsistent customer imagery across StyloDyna.

## 2. Identity Identifier

Canonical format:

`SD-CUST-###`

An ID is permanent. Never recycle a retired ID for another person.

## 3. Fictional Identity Boundary

Customer identities created by this system are fictional brand personas unless separately backed by a real, consented customer record. Fictional identities must never be represented internally as verified real purchasers.

## 4. Distinctiveness Standard

A new identity must be intentionally differentiated from existing identities across multiple dimensions:

- facial structure and proportions
- complexion and visible skin characteristics
- age band
- hairstyle, length, texture and styling
- facial hair where applicable
- clothing silhouette, palette and styling
- accessories
- environment and background
- lighting direction and quality
- camera distance and angle
- portrait/selfie/candid/editorial treatment
- posture and expression
- personality signal

Changing only clothing, background, or hairstyle is insufficient when the underlying person still appears substantially identical.

## 5. Prompt Governance

Each identity owns `prompt.md`. It should contain the approved identity specification and explicit invariants. Prompts must not silently drift between departments or campaigns.

When a new scene is required, preserve identity invariants while varying only explicitly permitted scene/usage characteristics.

## 6. Identity Lock

After human approval, set the identity state to `IDENTITY_LOCKED`. The approved master becomes the visual identity authority.

Regeneration is not a replacement operation. A new generation is a candidate and requires explicit human approval before superseding a locked master.

## 7. Master Asset

Canonical filename:

`sd-cust-###-master.png`

Master images belong under:

`identities/SD-CUST-###/master/`

Do not optimize, crop, resize, recolor, or overwrite the canonical master in place. Production derivatives belong in the appropriate DAM/media pipeline.

## 8. Metadata and Integrity

After placing an approved master, record at minimum:

- filename
- SHA-256
- width
- height
- format
- approval state
- approval date when known

Unknown values remain `null`; do not infer them.

## 9. Usage Governance

`usage.md` records where an identity may be used. Typical contexts include:

- customer-review avatar
- UGC-style creative
- social proof creative
- advertising creative
- department/category editorial content

A customer identity does not imply permission to fabricate a verified purchase, rating, quote, location, or product experience.

## 10. Cross-Department Reuse

An existing identity may be reused only when intentional and consistent with its usage record. If a new persona is required, create a new ID instead of modifying a locked identity into a different person.

## 11. Duplicate Prevention

Before approving a new customer:

1. review the registry;
2. compare against existing approved masters;
3. inspect face, silhouette, styling, environment and photographic treatment;
4. reject candidates that appear to be the same or confusingly similar person.

## 12. Lifecycle States

Recommended states:

- `DRAFT`
- `CANDIDATE_GENERATED`
- `HUMAN_REVIEW_PENDING`
- `IDENTITY_LOCKED`
- `ACTIVE`
- `RETIRED`

`RETIRED` identities remain in the registry for collision prevention.

## 13. Source and Generated Asset Boundary

Generated candidates and external inputs should first enter a controlled intake/staging location. Only an explicitly approved image becomes the canonical master.

## 14. Repository Rule

Documentation and metadata may be version controlled. Large/binary asset Git policy should follow the repository's existing media/Git governance. This standard does not override an established DAM policy.

## 15. Unknown Data

Never manufacture missing identity characteristics, approval metadata, hashes, dimensions, customer claims, or usage history. Use `null`, `UNKNOWN`, `NOT_CONFIGURED`, or an equivalent explicit state.

## 16. Current Package Note

This package intentionally preserves unresolved identity details where the complete approved specifications were not available at packaging time. Insert the already-generated approved master images and complete only from authoritative prompts/records.
