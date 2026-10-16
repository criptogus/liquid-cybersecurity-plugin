# Example tasks

These are copyable prompts for later use. Storing this document is not consent
to execute any task. Replace all placeholders before a real review. No example
comes with a promised finding, severity or proof that the service is connected.

## 1. Start without an assessment

> I am new to Liquid. Explain the free website trial and whether I need a
> separate assessment grant to use the MCP. Do not upload code or open payment
> pages. Keep the answer brief.

## 2. Synthetic connection smoke test

Paste this only in a properly authorized test assessment:

> Synthetic demonstration only. I authorize sending this fictional file for
> static analysis: path demo/evaluate.ts, commit
> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb, content:
> export function evaluate(input: string) { return eval(input); }
> Show only Liquid's real status, candidate IDs and severity, line/column,
> content hash, provenance and coverage limits. Preserve an empty result if
> that is what the tool returns. Do not execute code, network tests or paid
> work. This is not production approval.

## 3. Review my selected release file

> Review only <relative/path.ts> and the imports I explicitly list, at candidate
> commit <40-character-SHA>. I authorize submitting those exact source bytes
> to Liquid. Ask before including any other file. Show the actual result and
> hashes, not an invented safety score. Do not execute or change the project.

## 4. Explain a finding and prepare a plan

> Read Liquid finding <real-finding-ID> from my approved assessment. Explain
> the evidence, missing context and a minimal correction plan with planned
> regression checks and rollback. Do not apply changes, create a PR or deploy.

## 5. Check a recorded review

> Check Liquid's recorded review for <40-character-SHA>. Match the repository
> and commit exactly. Keep absent, queued, failed and partial results distinct.
> Do not start a review or purchase anything.

## 6. Request broader coverage explicitly

> Explain the current scope and credit cost of a repository review for
> <40-character-SHA>. Prepare the official human-approval link only if the
> tool supports it. Do not open it, approve charges or start work.

## 7. Agency handoff

> This is an authorized client project. Help me select the correct assessment
> and prepare a source-free handoff of the review limitations and planned next
> checks. Keep this client's context separate. Do not contact the client,
> upload another client's files or change any permissions.
