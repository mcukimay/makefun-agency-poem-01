# agency-poem-01 v2 — "Ana"

A make.fun entry for the "Write the best poem about agency" bounty.

## The poem

Nine-year-old Ana is told to play it the way it's written. One night she
plays it wrong on purpose — one bent note, one pause held a beat too long —
and the tune leans toward her like a door opening. Her mother, listening
from the kitchen, puts down the knife and asks for it again.

Agency as the deliberate wrong note: not a slogan about choosing, but one
child, one piano, one evening, and the sound of a choice being made.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes the poem to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`),
deterministically, with no trailing newline. Node 22, standard library only.
