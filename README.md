## Description

Language service - server. Made by Meitar Shalom.

## requests

get one word: http://localhost:3004/words/get/?wordCode=20&lang=english

create one word: http://localhost:3004/words/ + send body: {
"wordCode": "A1", // 2-50 characters
"lang": "English", // 2-50 characters
"text": "Water" // 2-50 characters
}

## API Documentation

swagger: http://localhost:3004/api

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
