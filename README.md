This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting Environment Variable

Create `.env.local` with below content and run the app. If the env variable is changed, you have to restart app.
```
NEXT_PUBLIC_FORTMATIC_API_KEY=pk_test_F20FF3563F093AEE
NEXT_PUBLIC_MAGIC_API_KEY=pk_test_398B82F5F0E88874
NEXT_PUBLIC_PORTIS_DAPP_ID=e9be171c-2b7f-4ff0-8db9-327707511ee2
NEXT_PUBLIC_RPC_URL_1=https://mainnet.infura.io/v3/84842078b09946638c03157f83405213
NEXT_PUBLIC_RPC_URL_4=https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213

```

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connectors

- Shows several connectors dialog
- Tests only Metamask fully


