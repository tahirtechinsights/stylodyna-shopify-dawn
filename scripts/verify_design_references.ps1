# Automated Design Reference Integrity Verification Script (StyloDyna Storefront)
param (
    [string]$ManifestPath = "docs/design-references/reference-manifest.json"
)

Write-Host "=================================================="
Write-Host " STYLODYNA DESIGN REFERENCE INTEGRITY VERIFIER "
Write-Host "=================================================="

if (-not (Test-Path $ManifestPath)) {
    Write-Error "Manifest file not found: $ManifestPath"
    exit 1
}

$manifestContent = Get-Content -Raw $ManifestPath | ConvertFrom-Json
$hasFailure = $false

foreach ($prop in $manifestContent.references.PSObject.Properties) {
    $ref = $prop.Value
    $refId = $prop.Name
    $filePath = $ref.path
    $expectedHash = $ref.sha256

    if ($expectedHash -eq "PENDING_RE_UPLOAD") {
        Write-Host "[PENDING] $refId : Awaiting user re-uploaded asset at '$filePath'" -ForegroundColor Yellow
        continue
    }

    if (-not (Test-Path $filePath)) {
        Write-Host "[FAIL] $refId : File missing at '$filePath'" -ForegroundColor Red
        $hasFailure = $true
        continue
    }

    $actualHash = (Get-FileHash -Path $filePath -Algorithm SHA256).Hash.ToLower()

    if ($actualHash -eq $expectedHash.ToLower()) {
        Write-Host "[PASS] $refId : SHA-256 match ($actualHash)" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] $refId : SHA-256 MISMATCH!" -ForegroundColor Red
        Write-Host " Expected: $expectedHash" -ForegroundColor Red
        Write-Host " Actual:   $actualHash" -ForegroundColor Red
        $hasFailure = $true
    }
}

Write-Host "=================================================="
if ($hasFailure) {
    Write-Host "RESULT: INTEGRITY CHECK FAILED" -ForegroundColor Red
    exit 1
} else {
    Write-Host "RESULT: INTEGRITY CHECK PASSED" -ForegroundColor Green
    exit 0
}
