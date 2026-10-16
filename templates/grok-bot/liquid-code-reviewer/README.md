# Liquid Code Reviewer: Grok Bot template source

**Review the code you are about to ship. Know what still needs checking.**

By Zero Agency. English. On demand. No scheduled routines.

This directory contains authoring materials for a native Grok Bot template,
not an official JSON import format. The native template is published separately.
Templates and MCP plugins are separate distribution surfaces. A template is
not listed as a prerequisite for using an MCP connection in the official docs.

## What is included

| File | Use |
| --- | --- |
| `PROFILE.md` | Paste the standing instructions into the Bot's description. |
| `SETUP_MESSAGE.md` | Send as the first setup message; no review runs from it. |
| `SKILL.md` | Save as a reusable, self-contained workflow through Grok Bot. |
| `EXAMPLES.md` | Copy a task only when ready to authorize that specific action. |
| `LISTING.md` | English name, description and copy for a future public share. |
| `PUBLISHING.md` | Native creation, inspection and publication checklist. |
| `ACCEPTANCE.md` | Manual behavior tests; these have not been executed. |

Start with a fresh Bot rather than sharing an assistant containing customer
history, private instructions or account data. Configure the profile and skill,
then follow PUBLISHING.md. The filenames here are our packaging convention,
not required platform filenames.

## The important setup limitation

The official September 8 guide says non-standard plugins, custom MCP servers,
custom code and scripts do not transfer automatically in a template. Include
explicit setup instructions. Each recipient must connect their own Liquid
account and approve the exact client/user/assessment scope. Never share a token
or assume the creator's authorization carries over.

A new user without an assessment grant can start the separate website trial:
https://liquidplatform.org/auth?lang=en&trial=1&utm_source=grok_bot&utm_medium=template&utm_campaign=cursor_grok_launch&utm_content=template_readme

That trial is one JS/TS file up to 12,000 UTF-8 bytes per verified account. It is
not anonymous MCP access or a full audit. Do not upload code during installation.

## References checked October 15, 2026

- Official guide, published September 8, 2026:
  https://x.ai/bot/guides/templates-for-grok-bot
- Native creation and sharing, updated October 12, 2026:
  https://docs.x.ai/grok-bot/bots
- Per-person OAuth and Remote HTTPS MCP setup:
  https://docs.x.ai/grok-bot/team-bots
- Separate Cursor plugin submission format:
  https://cursor.com/docs/reference/plugins

The parent client-package MIT license applies. These materials do not license
the Liquid backend or confer certification. The verified native public template is https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4.
Its profile and description identify Zero Agency; the host creator attribution is
the personal account display name. A public share is not marketplace approval.
