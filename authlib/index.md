# Authlib

An easy authentication library for Node.js.

### About

Authlib is a Node.js library for ExpressJS servers that allows for easy integration with an authentication mechanism. Authlib supports using sign-in and sign-up with a local database or with a Google account. Soon, it will support using a GitHub account or a Microsoft account as well.\
Authlib was originally created for the [`OpenDocs Editor`](https://github.com/opendocs-editor) project.

### Quick Start

<!-- tabs:start -->

#### **Yarn (reccommended)**

1. Create a project with `yarn init`.
2. Migrate to Yarn 3 with `yarn set version berry`. Then run `yarn install` again.
3. Create a GitHub Personal Access Token with the scopes `read:packages`, `write:packages`, `delete:packages`, and `repo`.
4. Add this to your `.yarnrc.yml` file:

```yaml
npmScopes:
    opendocs-editor:
        npmRegistryServer: https://npm.pkg.github.com

npmRegistries:
    //npm.pkg.github.com:
        npmAuthToken: MY_GITHUB_PERSONAL_ACCESS_TOKEN
```

5. Install authlib and express with `yarn add @opendocs-editor/authlib express`.
6. Create the `index.js` file.
7. Create a server with the following code:

```js
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
```

8. Integrate Authlib into the server.

```js
// after requiring express, require authlib
const useAuth = require("@opendocs-editor/authlib");
...
// after defining the port, initialize authlib
useAuth(app, "authlib_dev");
```

#### **NPM**

1. Create a project with `npm init`.
2. Create a GitHub Personal Access Token with the scopes `read:packages`, `write:packages`, `delete:packages`, and `repo`.
3. Add this to your `.npmrc` file:

```
//npm.pkg.github.com/:_authToken=MY_GITHUB_PERSONAL_ACCESS_TOKEN
@opendocs-editor:registry=https://npm.pkg.github.com
```

4. Install authlib and express with `npm install @opendocs-editor/authlib express`.
5. Create the `index.js` file.
6. Create a server with the following code:

```js
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
```

7. Integrate Authlib into the server.

```js
// after requiring express, require authlib
const useAuth = require("@opendocs-editor/authlib");
...
// after defining the port, initialize authlib
useAuth(app, "authlib_dev");
```

#### **pnPM**

This is not supported yet. Try using `npm` or `yarn` instead.

<!-- tabs:end -->
