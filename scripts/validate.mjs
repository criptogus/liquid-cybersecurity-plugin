import assert from 'node:assert/strict';
import { readFile, readdir, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFile(path.join(root, p), 'utf8');
const parse = async p => JSON.parse(await read(p));
let checks = 0;
const check = (condition, label) => { assert.ok(condition, label); checks++; };
async function walk(dir) {
  let result = [];
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry), info = await lstat(full);
    check(!info.isSymbolicLink(), 'No symlinks in distributable package');
    result.push(...(info.isDirectory() ? await walk(full) : [full]));
  }
  return result;
}
try {
  const manifest = await parse('.cursor-plugin/plugin.json');
  check(manifest.name === 'liquid-cybersecurity', 'Stable plugin name');
  check(manifest.author.name === 'Zero Agency', 'Publisher');
  check(/^\d+\.\d+\.\d+$/.test(manifest.version), 'Semantic version');
  check(manifest.mcpServers === './mcp.json', 'Explicit MCP path');
  check(manifest.skills === './skills/' && manifest.rules === './rules/', 'Component paths');
  check(!('hooks' in manifest) && !('variables' in manifest), 'No automatic hooks or embedded token configuration');
  const mcp = await parse('mcp.json');
  check(Object.keys(mcp.mcpServers).length === 1, 'Single server');
  const server = mcp.mcpServers['liquid-cybersecurity'];
  check(server.url === 'https://liquidplatform.org/mcp', 'Verified endpoint');
  check(Object.keys(server).length === 1, 'OAuth discovery, no embedded secrets or background commands');
  const skills = ['liquid-start', 'liquid-review', 'liquid-fix-plan', 'liquid-review-status'];
  check((await readdir(path.join(root, 'skills'))).length === skills.length, 'Expected skills');
  for (const name of skills) {
    const text = await read(`skills/${name}/SKILL.md`);
    check(text.startsWith('---\n'), `${name} frontmatter`);
    check(text.includes(`name: ${name}\n`) && /\ndescription: .+/.test(text), `${name} metadata`);
    check(text.includes('../../rules/liquid-boundaries.mdc'), `${name} boundaries reference`);
  }
  const rule = await read('rules/liquid-boundaries.mdc');
  check(rule.includes('alwaysApply: false'), 'No always-on sales or review interception');
  check(rule.includes('deploymentApproved=false') && rule.includes('Synthetic'), 'Coverage and synthetic labels');
  const pkg = await parse('package.json');
  check(Object.keys(pkg.dependencies).length === 0 && Object.keys(pkg.devDependencies).length === 0, 'No third-party package dependencies');
  const files = await walk(root);
  for (const file of files) {
    const rel = path.relative(root, file);
    check(!/(^|\/)\.env(?:\.|$)/.test(rel), 'No environment files');
    const content = await readFile(file, 'utf8');
    check(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(content), 'No private-key blocks');
    check(!content.includes(['criptogus', 'secure-ai-portal'].join('/')), 'Private repository not published in client package');
  }
  console.log(JSON.stringify({ status: 'passed', checks, files: files.length, execution: 'offline-package-checks-only', clientIntegrationTested: false, marketplaceApproved: false, deploymentApproved: false }, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
