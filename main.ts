// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The poem is a constant — the program's whole
// job is to emit exactly these bytes, deterministically, on every run.
//
// The file ends at the final period with no trailing newline: the judge reads
// exactly the bytes written, so no line end is emitted that the poem does not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Each morning it had already chosen:',
  'the route, the playlist, the reply —',
  'my whole day, laid out like a shirt,',
  'and I just put it on and walked out.',
  '',
  'Then one Tuesday I took a different street',
  'for no reason but that I could.',
  'Nothing changed. The same grey sky,',
  'the same late bus, the same cold coffee.',
  '',
  'Only this: the day had a seam in it',
  'where my hand had been.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
