# Installation and account authorization

## Cursor beta
Copy the client package, not the parent product repository, into
`~/.cursor/plugins/local/liquid-cybersecurity`. The included installer previews
by default and requires `--apply` to write. Reload Cursor. Confirm four skills,
one manual rule and one remote MCP server. Enterprise policy may block local
imports. An installed marketplace version takes precedence over a local copy.

Connect the server through the client's MCP settings. The package uses Liquid's
native OAuth endpoint, `https://liquidplatform.org/api/mcp/corrections`. Native OAuth must be
enabled in Liquid and the exact client/user/assessment grant approved. Do not
weaken redirect checks or change server authorization to make a test pass.

## Manual MCP fallback
Add the entry below to an existing MCP configuration using the client's UI.
Merge only this entry; do not replace other servers or overwrite credentials.
This fallback installs the connector, not the four skills.

```json
{
  "mcpServers": {
    "liquid-cybersecurity": {
      "url": "https://liquidplatform.org/api/mcp/corrections"
    }
  }
}
```

## Grok Bot

Import [Liquid Code Reviewer](https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4). Ask
“Use the linked Liquid onboarding playbook” or “Use the linked Liquid code-review
playbook”. Both workflows are plain Markdown references pinned to a public
commit; no manual private-skill installation is required. Reference loading must
stop on failure or incomplete content and never executes downloaded code.

Liquid MCP setup remains separate: use a Remote HTTPS connection to
`https://liquidplatform.org/api/mcp/corrections`, your own OAuth and an exact
owner/admin-approved user/client/assessment grant. Source submission needs its
own consent. Template import and reference loading do not authorize a review,
charge, source upload or deployment.

Do not assume an account's website trial automatically grants MCP assessment
access. For a first-time user without a grant, direct them to the free website
trial instead of reporting a false connection success.

## Release smoke tests (not yet executed in either desktop client)
Confirm install discovery, personal sign-in, exact assessment consent, seven
tool schemas, an explicitly authorized synthetic source review, consent
revocation, account switching, and missing/expired-grant failures.
Do not inspect real customer data for this test. No live pentest or purchase.
Record client versions, date and actual evidence separately for each client.

## Removal
Disable the plugin using the client UI. For a local beta, manually remove only
its dedicated plugin folder after checking its path. Revoke the grant in Liquid
when access is no longer needed. Removing local files is not proof of revocation.

## Grok Bot usage template

The public template is https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4. The
`templates/grok-bot/liquid-code-reviewer` directory contains the English authoring
kit and both complete playbooks under `playbooks/`. Maintainer publication is a
separate native Share flow. Recipient imports do not copy custom MCP connections,
creator credentials or assessment grants; recipients authorize those separately.
