import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const base = 'templates/grok-bot/liquid-code-reviewer/';
const text = p => readFile(new URL(p, root), 'utf8');
const names = ['README.md', 'PROFILE.md', 'SETUP_MESSAGE.md', 'SKILL.md', 'EXAMPLES.md', 'LISTING.md', 'PUBLISHING.md', 'ACCEPTANCE.md'];
test('all eight template source files are present and nonempty', async () => {
  for (const name of names) assert.ok((await text(base + name)).trim().length > 100);
});
test('source kit is not misrepresented as a native import or live link', async () => {
  const readme = await text(base + 'README.md');
  assert.match(readme, /not an official JSON import format/);
  assert.ok(readme.includes('https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4'));
});
test('self-contained skill names all seven real tools', async () => {
  const skill = await text(base + 'SKILL.md');
  assert.ok(skill.startsWith('---\nname: liquid-code-reviewer\n'));
  for (const tool of ['liquid_list_findings', 'liquid_get_fix_context', 'liquid_service_catalog', 'liquid_review_code', 'liquid_review_diff', 'liquid_prepare_repository_review', 'liquid_get_review_status']) assert.ok(skill.includes(tool));
  assert.doesNotMatch(skill, /\.\.\/\.\.\/rules/);
});
test('connection setup does not assume transferred MCP or credentials', async () => {
  const setup = await text(base + 'SETUP_MESSAGE.md');
  assert.match(setup, /Custom MCP connections are not automatically copied/);
  assert.match(setup, /https:\/\/liquidplatform\.org\/api\/mcp\/corrections/);
  assert.match(setup, /own OAuth/);
  assert.match(setup, /client\/user\/assessment grant/);
});
test('trial and assessment entitlements remain separate', async () => {
  const skill = await text(base + 'SKILL.md');
  assert.match(skill, /12,000 UTF-8 bytes/);
  assert.match(skill, /not\nfree unrestricted MCP access/);
  assert.match(skill, /20\nfiles and 48 KB/);
});
test('profile denies automatic spending, PRs, routines and deployment', async () => {
  const p = await text(base + 'PROFILE.md');
  for (const phrase of ['deploymentApproved=false', 'spend credits', 'create or merge PRs', 'schedule routines', 'Product-email consent is separate']) assert.ok(p.includes(phrase));
});
test('sharing checklist requires inspection and recipient-side testing', async () => {
  const p = await text(base + 'PUBLISHING.md');
  for (const phrase of ['Create template', 'View template details', 'Team-only', 'Public link', 'separate recipient account', 'not a live share link']) assert.ok(p.includes(phrase));
});
test('template attribution links contain no dynamic personal data fields', async () => {
  for (const name of names) {
    const content = await text(base + name);
    for (const raw of content.match(/https:\/\/liquidplatform\.org\/auth\?[^\s]+/g) ?? []) {
      const url = new URL(raw);
      assert.equal(url.searchParams.get('lang'), 'en');
      assert.equal(url.searchParams.get('utm_source'), 'grok_bot');
      assert.equal(url.searchParams.get('utm_medium'), 'template');
      for (const key of url.searchParams.keys()) assert.ok(['lang','trial','utm_source','utm_medium','utm_campaign','utm_content'].includes(key));
    }
  }
});
test('installer includes template files and no native share ID is fabricated', async () => {
  assert.match(await text('scripts/install-local.mjs'), /'templates'/);
  for (const name of names) {
    const urls = (await text(base + name)).match(/https:\/\/x\.ai\/bot\/(?!guides\/)[A-Za-z0-9_-]{8,}/g) ?? [];
    for (const url of urls) assert.equal(url, 'https://x.ai/bot/MkDEiBKZof-O4eH3-FgY4');
  }
});
test('behavior tests remain labeled planned, not executed', async () => {
  assert.match(await text(base + 'ACCEPTANCE.md'), /planned, not executed/);
  assert.match(await text(base + 'EXAMPLES.md'), /not consent/);
});
