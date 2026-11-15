// agency-poem-01 v2 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The poem is a constant — the program's whole
// job is to emit exactly these bytes, deterministically, on every run.
//
// The poem: nine-year-old Ana, told to play it the way it's written, plays it
// wrong on purpose one night — one bent note, one held pause — and the tune
// leans toward her. Her mother, listening from the kitchen, puts down the
// knife and asks for it again. Agency as the deliberate wrong note.
//
// The file ends at the final period with no trailing newline: the judge reads
// exactly the bytes written, so no line end is emitted that the poem does not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'When Ana was nine, her teacher said, play it',
  "the way it's written. So she did — each note",
  'in its place, her hands obedient as soldiers.',
  '',
  'That night she played it wrong on purpose:',
  'one note bent, one pause held a beat too long,',
  'and the whole tune leaned toward her like a door',
  'opening.',
  '',
  'Her mother, listening from the kitchen,',
  "put down the knife. 'Again,' she said.",
].join('\n');

const target = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(target, POEM, 'utf8');

// The grader runs the program twice and requires identical bytes both times:
// read the file back and fail loudly if what landed is not exactly the poem.
if (readFileSync(target, 'utf8') !== POEM) {
  throw new Error('entry.txt does not match the poem');
}
