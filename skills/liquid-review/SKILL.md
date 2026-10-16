---
name: liquid-review
description: Review explicitly authorized JS/TS source files or a Git diff with Liquid before release, preserving real candidates, hashes and coverage. Use for security review requests, not to certify deployment.
---
# Review selected source

Follow `../../rules/liquid-boundaries.mdc`. Use discovered Liquid schemas.

1. Resolve the exact 40-character hexadecimal candidate commit. Select the
   smallest useful file set and relevant local imports within the supported
   limits. Confirm that the user authorizes sending these specific bytes to
   Liquid. A request to install the plugin is not upload authorization.
2. Check the source is within the current schema limits: the documented MCP
   limit is 20 files and 48 KB total UTF-8. The website trial's separate 12,000
   byte allowance is not an MCP entitlement. Do not silently truncate.
3. Call `liquid_review_code` with `commitSha`, `authorizedSource: true`, and
   `files: [{path, content}]`. Do not execute source or test a target.
   For an explicitly requested diff, use `liquid_review_diff` with the exact
   `baseCommitSha`, candidate `commitSha`, authorization and unified `diff`.
4. Report only the real returned status, engine and candidates, with original
   ID, rule, severity, file, line and column when present. Preserve each
   manifest SHA-256 and `provenance`. If no candidate is returned, say that;
   do not add your own observation to the tool's findings array.
5. Explain submitted-content-only scope, no Git authentication of caller labels,
   no runtime/dependency/full-repository evidence, and the returned limitations.
   Diff coverage remains partial. Keep `deploymentApproved=false` visible.
   A transport/auth/parse failure is a failure, not a clean result.

Only with permission may you save a source-free receipt in the user's workspace.
Do not create tracking events or persist source as a side effect.
If the user asks for broader coverage, describe the human-approved repository
review path. Do not prepare paid work, open approval links, or quote cached
prices merely because candidates appeared. Do not use severity to pressure a sale.
