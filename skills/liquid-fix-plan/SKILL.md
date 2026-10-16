---
name: liquid-fix-plan
description: Read a real Liquid finding and prepare an evidence-backed remediation, regression and rollback plan. Does not automatically edit code, create a PR or deploy.
---
# Prepare a fix plan

Follow `../../rules/liquid-boundaries.mdc`.
If no finding is identified and the user requests open risks, use
`liquid_list_findings` from offset 0 and honor returned pagination. Do not
invent IDs or claim the first page is the complete assessment.
For a known finding, call `liquid_get_fix_context` with its exact `findingId`.

Label synthetic context. Preserve absent repository and commit fields as absent;
do not infer them from the user's open editor or another assessment.
Separate observed evidence, untested hypotheses and proposed remediation.
Read the authorized exact revision before suggesting project-specific edits.

Deliver a minimal change proposal, affected behavior, a synthetic regression
assertion, the legitimate access cases to preserve, planned checks and rollback.
Mark every check planned unless its actual execution is recorded. Do not print
secrets or introduce bypasses of authentication, authorization or tenant isolation.
A later disappearance of a static candidate is not proof that exploitation or
regression behavior has been tested.

This workflow prepares a plan only. A user's separate request for local edits
or a PR is outside the MCP and must use the host's own tools and approval
boundary. Do not merge, publish or deploy automatically. Do not initiate
purchases or network retests from finding guidance.
