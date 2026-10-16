import { cp, lstat, mkdir, readdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(homedir(), '.cursor', 'plugins', 'local', 'liquid-cybersecurity');
const allowed = ['.cursor-plugin', 'mcp.json', 'skills', 'rules', 'README.md', 'LICENSE', 'docs', 'templates'];
const args = process.argv.slice(2);

async function rejectSymlinks(p) {
  const info = await lstat(p);
  if (info.isSymbolicLink()) throw new Error(`Refusing a source symlink: ${p}`);
  if (info.isDirectory()) for (const entry of await readdir(p)) await rejectSymlinks(path.join(p, entry));
}

try {
  if (args.some(a => a !== '--apply') || args.length > 1) throw new Error('Usage: node scripts/install-local.mjs [--apply]');
  for (const item of allowed) await rejectSymlinks(path.join(source, item));
  console.log(`Source: ${source}
Destination: ${destination}`);
  if (!args.includes('--apply')) {
    console.log('Preview only. Run again with --apply to copy this plugin. No downloads or account changes.');
  } else {
    // Refuse an existing destination, including symlinks; never overwrite another install.
    try { await lstat(destination); throw new Error('Destination already exists. Review it manually; nothing was overwritten.'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await mkdir(path.dirname(destination), { recursive: true });
    await mkdir(destination);
    for (const item of allowed) await cp(path.join(source, item), path.join(destination, item), { recursive: true, force: false, errorOnExist: true });
    console.log('Copied the client package. Reload Cursor, verify its components, then authorize Liquid OAuth.');
    console.log('Copying files does not establish a connection or marketplace approval.');
  }
} catch (error) {
  console.error(`Installation stopped: ${error.message}`);
  process.exitCode = 1;
}
