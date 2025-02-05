## React Package Template

This repo is intended to be used as a starter template for creating react pacakges.

This repo uses Bun.

## Dev Server

To develop your app locally run `bun install` and then `bun run dev`.

## Publishing Your Package

Once you have your npm login authenticated in your terminal/command prompt or equivalent (.npmrc file), you can run `bun run publish` to execute the included publish script.

This script will:

1. Type check your code ✅
2. Lint your code 🧹
3. Format your code 🧠
4. Test your code (if you have any tests you need to uncomment the part of the script that runs tests) 🧪
5. Build your code 🧰
6. Ask you to select if this is a patch, minor, or major version change. This will adjust your package.json accordingly and create a tag commit. ✅
7. Run another build so the package version update is included in the published code ✅
8. Attempt to run `npm publish` to publish your package! 🚀
