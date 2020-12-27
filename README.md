## firebase-tools UA example

```
yarn install
yarn serve --project YOUR_PROJECT_ID
```

### Run functions directly

1. Access to `http://localhost:5001/YOUR_PROJECT_ID/us-central1/checkUA`
2. You'll see your user agent.

Example

```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
```

### Run functions from hosting

1. Access to `http://localhost:5000/foobar`
2. You'll see `firebasecli/9.1.0` regardless of your user agent.
