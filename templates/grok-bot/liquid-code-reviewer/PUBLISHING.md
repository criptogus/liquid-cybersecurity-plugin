# Create the native Grok Bot template

Status (October 16, 2026): native template published at
https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4. OAuth and one synthetic read
passed through the resource-specific endpoint below. Independent recipient
import testing remains unverified. These are separate checks.
A Markdown bundle is not a live share link. This is a separate process from
submitting the Cursor plugin to its marketplace.

1. Create a fresh Bot using New > Create new Bot. In Edit Profile, set the name
   to Liquid Code Reviewer, identify Zero Agency, and use PROFILE.md for the
   standing description. Do not clone a Bot with private customer knowledge.
2. Add the supplied SKILL.md through the supported skills setup. The workflow
   is self-contained; do not rely on a file remaining on the creator's computer.
   Send SETUP_MESSAGE.md. Verify what was saved in the actual client.
3. Configure the custom Remote HTTPS MCP connection with the user's own OAuth
   at https://liquidplatform.org/api/mcp/corrections when an authorized assessment is available.
   Do not add shared secrets or automatically reuse a demonstration grant.
   Also verify that a user without a grant receives accurate web-trial guidance.
4. Run the authorized, synthetic smoke tests in ACCEPTANCE.md with no spending
   or network testing. Do not use customer findings to populate the share.
5. Open the Share menu and choose Create template. The September guide calls
   this Share as Template. UI names may vary by installed version.
6. Inspect View template details: only the generic profile, reusable skill,
   intended integration instructions and synthetic examples belong in it.
   Remove private memories, internal URLs, account/assessment identifiers,
   customer information, receipts, keys and project code. Confirm no routines.
7. Choose the intended audience explicitly. Prefer Team-only while validating;
   public distribution needs Public link. Do not trust the account's default.
   Complete the publication step shown in the client only after reviewing the
   exact shared configuration. Copy the real native link.
8. Test the share from a separate recipient account. Confirm Add to Grok Bot
   creates the intended copy, the skill is included, custom MCP setup is explained,
   the recipient uses their own OAuth/grant, and no creator data is visible.
9. Record the URL, client version, date and evidence. Only then insert the real
   link in LISTING.md and launch materials. A public link is not automatic
   admission to a curated marketplace or directory.

## Recipient quick start

Open the real share link, inspect the included configuration, choose Add to
Grok Bot, and finish the import in the app. Configure the custom MCP connection
with your own account. Sign-in alone is not an approved Liquid assessment grant.
Start with an authorized synthetic task or the separate website trial.

## What not to publish

Never publish the private application repository, its Git history, environment
files, customer source, internal launch-operations files or a reusable credential.
Do not rely solely on automatic anonymization. Inspect the native export.
The official guide explicitly says custom MCP servers, scripts and code do not
transfer automatically; these setup instructions must remain in the template.

## Sources

https://docs.x.ai/grok-bot/bots (updated October 12, 2026)
https://x.ai/bot/guides/templates-for-grok-bot (September 8, 2026)
https://docs.x.ai/grok-bot/team-bots
