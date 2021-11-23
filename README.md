# Reproduction

Reproduction For [preact-cli issue #1616](https://github.com/preactjs/preact-cli/issues/1616).

The `ui` folder is a default preact-cli templated application, the only change
being adding `fp-ts@2` as a dependency and importing it into the
`ui/src/index.js`.

The `lib` folder is a simple package which uses `fp-ts@1.19`, imports a feature
of this library which only exists in this version and not in the `fp-ts@2`
version, and then console.logs out a value based on this feature.

If the `ui` package contains the dependency on `fp-ts@2` then an error will
display in the console when running `yarn dev` and viewing the page. If the `ui`
package doesn't contain this dependency, then the expected value displays in the
console instead.
