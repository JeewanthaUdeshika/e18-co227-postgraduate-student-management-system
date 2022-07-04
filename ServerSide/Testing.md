# Testing of the Application
For the testing of our application we have used Jset module in javaScript

## Setting Up Jest & SuperTest
### Installing dependencies
```
npm install jest --save-dev
npm install supertest --save-dev
npm install cross-env --save-dev
```

Jest - For the testing
SuperTesting - For send server requests

### Settting up the testing environment
Here we have to edit the ``package.json`` file to set start testing on ``npm test`` command

```
"scripts" : {
    ...
    "test" : "cross-env NODE_ENV=test jest --testTimeout=10000",
    ...
}
```

Then we need to ignore our ``./node_modules`` folder, by adding this to ``package.json``
```
...
"jest": {
    "testEnvironmnet": "node",
    "coveragePathIgnorePatterns":[
        "/node_modules/"
    ]
},
```