# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/AryFlows/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/AryFlows/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

One original fortune-cookie line for a software developer, written for the
[make.fun bounty](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44).

## Entry

> The code you ship on Friday will keep you company all weekend.

62 characters (gate: 1–120). A Friday deploy is the one true dev pain every
tired senior engineer recognises — and "keep you company" is the quiet twist:
the code does not leave you alone, it pages you all weekend.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (`MAKEFUN_OUTPUT_DIR` overrides the
output directory). Node standard library only, no dependencies.

## Verification

Run `main.ts` and check the output is exactly one line, 62 characters,
valid UTF-8, with no trailing newline:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fortune-out node main.ts
wc -c /tmp/fortune-out/entry.txt
```
