#!/usr/bin/env node
/**
 * Sync script harness: quick, offline-safe run-record helper for scripts/sync-repo-catalog.mjs.
 *
 * This is NOT the sync script itself. It exists so you can validate that the project
 * Node runtime can load the sync script as a module and that the target catalog path is
 * reachable from this repo root, without making any GitHub API calls.
 *
 * Usage (from repo root):
 *   node scripts/sync-repo-catalog.harness.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const CATALOG_PATH = resolve(REPO_ROOT, 'src/data/repoCatalog.ts');

function main() {
  console.log('repo-root=', REPO_ROOT);
  console.log('catalog-path=', CATALOG_PATH);
  console.log('catalog-exists=', existsSync(CATALOG_PATH));

  // Sniff the target module without executing its network code.
  try {
    const source = readFileSync(CATALOG_PATH, 'utf8');
    const hasExport = source.includes('export const repoCatalog');
    const hasInterface = source.includes('export interface RepoCatalogEntry');
    console.log('catalog-has-repoCatalog-export=', hasExport);
    console.log('catalog-has-RepoCatalogEntry-interface=', hasInterface);
    console.log('catalog-line-count=', source.split('\n').length);
  } catch (err) {
    console.error('catalog-read-failed=', err.message);
  }

  // Validate that the sync script itself is parseable by this Node version.
  const syncPath = resolve(HERE, 'sync-repo-catalog.mjs');
  if (!existsSync(syncPath)) {
    console.error('sync-script-missing=', syncPath);
    return;
  }
  try {
    readFileSync(syncPath, 'utf8');
    console.log('sync-script-parseable=yes');
    console.log('sync-script-shebang=', readFileSync(syncPath, 'utf8').split('\n')[0]);
  } catch (err) {
    console.error('sync-script-read-failed=', err.message);
  }
}

main();
