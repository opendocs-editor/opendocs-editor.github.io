# Authlib API

<!-- tabs:start -->

#### **Initialization**

To initialize an instance of Authlib, first import the initializer function:

#### JavaScript: {docsify-ignore}
```javascript
const useAuth = require("@opendocs-editor/authlib");
```

#### TypeScript: {docsify-ignore}
```typescript
import useAuth from "@opendocs-editor/authlib";
```

After that, you can initialize it with your existing ExpressJS app and the name of the database you would like to use:

#### JavaScript: {docsify-ignore}
```javascript
const useAuth = require("@opendocs-editor/authlib");
const express = require("express");

const main = async () => {
    const app = express();

    await useAuth(app, "database_name");
};

main();
```

#### TypeScript: {docsify-ignore}
```typescript
import useAuth from "@opendocs-editor/authlib";
import express from "express";

const main = async () => {
    const app = express();

    await useAuth(app, "database_name");
};

main();
```

#### **Initialization Parameters**

The **async** Authlib `useAuth` method has several parameters. Here's the breakdown of them:

```typescript
const useAuth = async (
    app: express.Express,
    database: string,
    mongodbOptions?: MongoDBOptions,
    authOptions?: AuthOptions
): Promise<void> => {...};
```

As you can see, there are two interfaces of options to use, `MongoDBOptions` and `AuthOptions`. Below are their parameters and documentation.

#### MongoDBOptions {docsify-ignore}

```typescript
interface MongoDBOptions {
    /**
     * Host for the MongoDB server. Leave out the port and the http:// or https://.
     * Defaults to: localhost
     */
    host?: string;
    /**
     * Port of the MongoDB server.
     * Defaults to: 27017
     */
    port?: number;
    /**
     * User to authenticate to the MongoDB server as.
     * Defaults to: None
     */
    user?: string;
    /**
     * Password for authenticating to the MongoDB server.
     * Defaults to: None
     */
    pass?: string;
}
```

#### AuthOptions {docsify-ignore}

```typescript
interface AuthOptions {
    /**
     * Whether or not to use Google Auth. **WIP**
     * Defaults to: false
     */
    useGoogleAuth?: boolean;
    /**
     * Options for Google Auth.
     * Defaults to: null
     */
    googleAuth?: {
        /**
         * Google OAuth2 client ID.
         * Defaults to: null
         */
        clientId?: string;
        /**
         * Google OAuth2 client secret.
         * Defaults to: null
         */
        clientSecret?: string;
        /**
         * Your website base URL.
         * Defaults to: null
         */
        websiteBaseUrl?: string;
    };
    /**
     * Whether or not to use GitHub Auth. **NOT IMPLEMENTED**
     * Defaults to: false
     */
    useGithubAuth?: boolean;
    /**
     * Options for GitHub Auth.
     * Defaults to: null
     */
    githubAuth?: {
        /**
         * Google OAuth2 client ID.
         * Defaults to: null
         */
        clientId?: string;
        /**
         * Google OAuth2 client secret.
         * Defaults to: null
         */
        clientSecret?: string;
        /**
         * Your website base URL.
         * Defaults to: null
         */
        websiteBaseUrl?: string;
        /**
         * The OAuth2 scope.
         * Defaults to: null
         */
        scope?: string;
        /**
         * The access token for GitHub OAuth.
         * Defaults to: null
         */
        accessToken?: string;
    };
    /**
     * The token for JsonWebToken to sign it's cookies with.
     * Defaults to: REPLACE_ME
     */
    jwtSecret?: string;
    /**
     * Whether or not to use the internal auth provider.
     * Defaults to: true
     */
    useInternalAuth?: boolean;
    /**
     * Whether or not to include the Auth UI.
     * Defaults to: true
     */
    includeAuthUI?: boolean;
    /**
     * The master token to create other tokens with.
     * Defaults to: REPLACE_ME
     */
    masterToken?: string;
}
```

#### **Events**

In the future, Authlib, when initialized, will return an Object with several built-in functions available to it, similar to this interface:

```typescript
interface AuthlibApplication {
    /**
     * Method for listening to an event.
     * @param event The event to listen to.
     * @param handler The handler for the event.
     */
    on: ( event: "login" | "register" | "logout",
          handler: (event: EventData) => any ) => void;
    
    /**
     * Closes the database connection (if it is connected).
     */
    close: () => void;
}
```

This API has not yet been implemented.

<!-- tabs:end -->