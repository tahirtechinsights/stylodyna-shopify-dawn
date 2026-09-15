# StyloDyna Customer Identity System

This directory is the canonical governance location for fictional customer identities used in StyloDyna customer reviews, UGC-style assets, advertising, social content, and related brand experiences.

## Principles

- Every customer receives a permanent `SD-CUST-###` identifier.
- Different customer IDs must represent visibly distinct fictional people.
- Identity differences must extend beyond faces to hair, clothing, environment, composition, camera style, expression, and personality.
- An approved master image is immutable. Regeneration creates a candidate, not an automatic replacement.
- Do not reuse one generated face under multiple customer IDs.
- Product identity and customer identity are governed separately.
- Master assets must be approved before production use.
- Do not invent customer testimonials or present fictional identities as verified purchasers.

## Workflow

1. Define the identity in `identity.json`.
2. Preserve the generation specification in `prompt.md`.
3. Generate candidate imagery outside the canonical master directory.
4. Human-review the candidate for identity distinctiveness and brand suitability.
5. Place the approved image in `master/`.
6. Record file metadata/hash in `identity.json`.
7. Document approved contexts in `usage.md`.
8. Register the identity in `CUSTOMER-IDENTITY-REGISTRY.json`.
9. Create derivatives through the project DAM/media workflow; never overwrite the approved master casually.

`source-inbox/` is a temporary intake location and is not canonical.
