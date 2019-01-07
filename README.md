# React Parcel Treeshake Codesplit Bug

A minimum app reproducing a bug with Parcel Bundler treeshaking and React code splitting.

## Build with tree shaking (broken)
```npm run-script build```

## Build without tree shaking
```npm run-script build:working```

## Serve
```npm run-script serve```

## Pinpoint the problem
If I remove `SideNav` from `main.js` the app works correcty with tree shaking.
