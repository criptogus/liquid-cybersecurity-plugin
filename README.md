# Liquid Cybersecurity for Cursor and Grok Bot

**Review the code you are about to ship. Understand what still needs checking.**

By Zero Agency. This client package connects an assistant to Liquid's remote
MCP service and adds four security-review workflows. It is a release candidate,
not a marketplace-approved listing. End-to-end sign-in in both clients remains
a release gate. Nothing in this repository certifies a deployment as secure.

## Start here

**New to Liquid?** [Start a free code review](https://liquidplatform.org/auth?lang=en&trial=1&utm_source=client_plugin&utm_medium=referral&utm_campaign=cursor_grok_launch&utm_content=readme).
The website trial supports one JavaScript or TypeScript file of up to 12,000
UTF-8 bytes per verified account. No payment card or Liquid credit charge is
required for that trial. It is a separate web flow, not anonymous MCP access.
A completed trial consumes the allowance even if no candidates are found;
syntax failures do not. The preview includes candidate locations and limited
remediation guidance, not a complete assessment.

**Already have a Liquid assessment?** Install this package and authorize the
connection for the exact assessment. Sign-in alone is not sufficient: an
owner/admin must approve a user + client + assessment grant.

## Install in Cursor for local evaluation

With Node.js 22 or later, from this package's directory:

```sh
node scripts/validate.mjs
node scripts/install-local.mjs
node scripts/install-local.mjs --apply
```

The first installer command previews the destination. `--apply` copies only
the client package to `~/.cursor/plugins/local/liquid-cybersecurity`. It refuses
to overwrite an existing installation, follows no source symlinks, downloads
nothing, and does not edit `~/.cursor/mcp.json`. Reload Cursor and find the
package under Customize. Local plugin imports must be allowed by your team.

Connect the `liquid-cybersecurity` MCP server and complete Liquid OAuth.
If you previously added the same server manually, review that configuration
and keep one connection rather than running duplicate servers.

## Grok Bot

Import the public [Liquid Code Reviewer template](https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4)
by Zero Agency. Ask either:

- “Use the linked Liquid onboarding playbook.”
- “Use the linked Liquid code-review playbook.”

The template references both complete Markdown playbooks at an immutable Git
commit. The Bot reads those public task references on request, without requiring
manual installation of private skills. It must report failed or incomplete
reference loading and must never execute downloaded content. Reading a playbook
does not run a Liquid review or spend Liquid credits.

A template never transfers a custom MCP connection, login or assessment grant.
For assessment tools, connect Remote HTTPS at
`https://liquidplatform.org/api/mcp/corrections` with your own OAuth and an
owner/admin-approved grant for the exact user, client and assessment. Permission
to submit the exact source files or diff is separate. Never paste tokens in chat.

The [authoring kit](templates/grok-bot/liquid-code-reviewer/README.md) and
[plain Markdown references](templates/grok-bot/liquid-code-reviewer/playbooks/)
are included for maintainers. Cursor Marketplace review remains separate from
the native public Grok template.

## Four workflows

| Skill | Outcome |
| --- | --- |
| `/liquid-start` | Choose a web trial or an authorized MCP connection. |
| `/liquid-review` | Review selected JS/TS files or a bounded diff; preserve real candidate IDs, locations, hashes and coverage. |
| `/liquid-fix-plan` | Read a finding and prepare a minimal remediation and regression plan. |
| `/liquid-review-status` | Read the recorded status for an exact commit, or prepare a human-approval link on request. |

Example: "Use Liquid to review only src/handler.ts at the exact commit I
provide. I authorize submitting that file. Show the actual result, hash and
limitations. Do not execute code, purchase a service, or deploy."

## What the connector can and cannot do

The MCP exposes seven tools: `liquid_list_findings`, `liquid_get_fix_context`,
`liquid_service_catalog`, `liquid_review_code`, `liquid_review_diff`,
`liquid_prepare_repository_review`, and `liquid_get_review_status`.
Re-discover the live schemas rather than assuming capabilities.

Immediate MCP source reviews are static and bounded: up to 20 submitted
files and 48 KB of UTF-8 content. They do not execute code, inspect all
dependencies, run a network pentest or review the whole repository.
A caller-provided commit label is not proof of Git provenance. A static
candidate is not a confirmed exploit. No candidates is not a security pass.
Diff-only coverage is partial.

The MCP cannot spend credits, edit code, open or merge pull requests, or
deploy. The host agent's own write tools are separate; this package does not
invoke them automatically. Paid work requires the user's separate approval
in Liquid. Local package tests are not a security assessment.

## Privacy and permissions

This plugin has no tracking SDK, background hook or automatic source upload.
Only explicitly selected, authorized source may be submitted. Never submit
secrets, production credentials or unnecessary personal data.
Immediate MCP source/results are ephemeral according to the current tool
contract; the separate web trial retains a limited result and content hash,
not source in the trial record. Your editor and account provider have their
own data-handling policies. Product-email consent is separate and optional.

[Privacy](https://liquidplatform.org/privacy) · [Terms](https://liquidplatform.org/terms)

See [release gates](docs/RELEASE.md), [installation details](docs/INSTALLATION.md),
and [verified references](docs/SOURCES.md). The MIT license covers only this
client package; the hosted backend remains separate.
