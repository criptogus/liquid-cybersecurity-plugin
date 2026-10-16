---
name: liquid-review-status
description: Read Liquid's recorded review state for an exact commit, or prepare a human-approved repository review handoff when explicitly requested. No paid execution or production approval.
---
# Read exact-commit status

Follow `../../rules/liquid-boundaries.mdc`.
Require the exact candidate commit and use `liquid_get_review_status`.
Report the actual repository, commit, status, coverage, pending findings and
limitations returned. Historical evidence, an empty history, queued work,
another revision, failure or partial coverage never becomes an approval.

If the user explicitly requests a broader repository review or its cost,
discover current tool schemas and call `liquid_prepare_repository_review`
for that exact SHA. Read `liquid_service_catalog` only if needed to explain
current pricing. Preparing a link is not creating or executing a job.
Preserve the returned amount and units. Do not invent dollar conversions,
free entitlements, discounts, URLs, jobs or completion times.

Present the trusted HTTPS Liquid handoff for the user to review scope and
approve separately. Do not open it, approve charges, start paid work, create
a PR or deploy. `deploymentApproved=false` remains the default boundary.
