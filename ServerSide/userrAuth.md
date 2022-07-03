# User Authentication using passport js

## Getting Started
To getting start, we have to install 2 seperate libraries.
1. Main ``Passport JS`` library - always required, used to maintain session information for authenticated users.
2. Strategy Library - This is dependent on the method  that we use to authenticate
    - ``passport-local``
    - ``passport-facebook``
    - ``passport-oauth-google``

```
$ npm i passport
$ npm i express-session

// Install the primary "Passport JS" library, and the "express-session" library
// The main "passport" library piggybacks on the "express-session" library, so in order to use "passport" you will have to install "express-session.
```

Install secondary library based on the methodology or "Strategy" you will use to authenticate users.

```
$ npm i passport-local
// in case you will be authenticating by comparing with username and password store in your DB ("Local Strategy")
OR
$ npm i passport-google-oauth
// in case you will be authenticating using Google login
OR
$ npm i passport-facebook
// in case you will be authenticating using Facebook login
```

