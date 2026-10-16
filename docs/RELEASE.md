# Release gates

Status: prepared client package, not a published or approved marketplace listing.
Offline package checks are separate from client integration and security tests.

- [ ] Create a dedicated public repository containing only this client package.
- [ ] Confirm the marketplace name is available; add the real public repository
      URL to the manifest only after that repository exists.
- [ ] Confirm the plugin-only MIT license and publisher identity, Zero Agency.
- [ ] Optionally add an approved existing brand logo. Do not invent trust seals.
- [ ] Run `node scripts/validate.mjs` on the release candidate.
- [ ] Install in Cursor and record client version, OAuth and tool-discovery tests.
- [ ] Install/connect in Grok Bot and record its own end-to-end tests.
- [ ] Verify new-user trial access independently from existing-assessment MCP.
- [ ] Verify source consent, grant revocation and cross-account isolation.
- [ ] Check privacy/terms links, quotas, support ownership and current claims.
- [ ] Submit the public client repository at https://cursor.com/marketplace/publish.
- [ ] Wait for actual review outcome; never call submission approval.
- [ ] Add the real listing/install URL to launch materials after approval.

Never make the private application repository public or publish its history,
environment files, customer data, backend implementation or internal launch ops.
A private branch containing this package is a review workspace, not a marketplace
submission. Do not merge into production solely to distribute the client plugin.

Current capability boundary: no code execution, network pentest, automatic
spending, code changes, PR/merge or deployment via the MCP. A bounded analysis
result is not certification. Broader services use their own scope and approvals.

## Separate Grok Bot template release

- [ ] Use the English Liquid Code Reviewer profile and self-contained skill.
- [ ] Inspect native template details for private data and unwanted routines.
- [ ] Verify recipient-side custom MCP setup and per-person OAuth.
- [ ] Generate and record the real native share URL.
- [ ] Test import with a separate authorized recipient account.
- [ ] Publish the intended audience only after those checks; do not equate a
      public share with curated marketplace approval.
