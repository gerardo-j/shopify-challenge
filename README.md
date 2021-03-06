This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, setup your environment variables in .env.local.
This project needs Firebase to properly work along with firestore.
It will use firestore to store the users data, and firebase to authenticate and allow for Scalability.

You can retrived the required info from your firebase console.

- `COOKIE_SECRET_CURRENT`
- `COOKIE_SECRET_PREVIOUS`
- `PRIVATE_KEY`
- `CLIENT_EMAIL`
- `NEXT_PUBLIC_HOST_URL`
- `NEXT_PUBLIC_HTTPS` (Set to `true` if using ssl)

It is recommended to use http://localhost:3000 as the `NEXT_PUBLIC_HOST_URL` for local environment.

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

Click [here](https://image-manager-rose.vercel.app/) to view live demo.

