# next-i18n-perf

Try out Next.js' [recommended i18n solution](https://nextjs.org/docs/app/building-your-application/routing/internationalization) and see what affect it has on build time.

## Usage

1. Clone this repo
2. `npm install` to install dependencies
3. `npm run bootstrap` to set up artifacts for testing. Bootstrap creates 30 pages that import 1000 locale strings each
4. `npm run build` to see how long a build takes

Compare `time.txt` to `baseline.txt` (logged when the site was empty).

## Benchmark

Build time with an empty Next.js site:

```
10.11 real        14.23 user         1.12 sys
```

Build time with 30 pages that import 1000 locale strings each:

```
16.58 real        25.26 user         2.42 sys
```