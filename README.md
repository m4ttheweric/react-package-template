## Installing this in other projects:

In order to install this in your project you will need to have a PAT token with package access

### Create a Personal Access Token (PAT):

1. Go to **GitHub > Settings > Developer Settings > Personal Access Tokens > Tokens (classic)**.
2. Generate a token with `read:packages` and `write:packages` scopes.
3. Set your token as the `GITHUB_TOKEN` .env variable in a way that `.npmrc` can read it in your environment. 

You should now be able to install the `@hasura/auth-ui` package using your package manager of choice:

```
npm install @hasura/auth-ui
```

### Dependencies and Styles

Several packages are peer depenencies including react-router-dom and mantine (core, hooks, form, and notifications). These should install when you install this package automatically.

#### Styles

1. You will need to wrap the `<HasuraAuthUI />` component in the provided `<MantineProvider />` to set the styles and theme correctly.
2. The following stylesheets also need to be imported somewhere that the `<HasuraAuthIU />` component can use them:


```
import '@mantine/core/styles.css'`;
import '@hasura/auth-ui/styles.css';
import '@mantine/notifications/styles.css';
```

### Routing

For the ui to work correctly, there needs to be a `<BrowserRouter>` parent in the tree somewhere.

The provided `Paths` and `AuthPaths` constants should be used when determining which routes need to be resolved.

To see an example, refer to [src/App.tsx](https://github.com/hasura/hasura-auth-ui/blob/master/src/App.tsx)

## Working on this project

If you want to update this project once your work is complete, there's a simple script for pushing a release to Github Packages:

```
bun run release
```

This script does the following:

1. Type check
2. Lint
3. Format
4. Run Tests
5. Run a Build
6. Prompt for which kind of release: patch, minor, or major. Then it will run `npm version` and create a tag.
7. Publish the private package to Github Packages
