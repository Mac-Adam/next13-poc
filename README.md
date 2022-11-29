This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## DB setup

1. run npm install prisma -D
2. run npx prisma init
   /prisma folder will be crated
   update databse url to suit your needs
3. update /prisma/prisma.schema with db model
   - Optionally run npx prisma format
4. run npx prisma db push
5. run npm install @prisma/client
6. run npm install ts-node -D
   - Add
     "ts-node": { + "compilerOptions": { + "module": "commonjs" + }}
     to tsconfig.js
   - run npm i -D ts-node typescript @types/node
   - add "prisma": {
     "seed": "ts-node prisma/seed.ts"
     }
     to package.json
7. create /prisma/seed.ts
   - Optionally run it with npx prisma db seed
8. Db setup finished run npx prisma studio to explore db

## API Setup

1. install required packages run npm install apollo-server-micro(this package is deprecated but it works and I am not able to easly make @apollo/server work so we will use this one) graphql micro-cors
2. create graphql folder wiht index.ts file
   - get cors types npm i --save-dev @types/micro-cors
3. crate context.ts schema.ts and types folder files in graphql folder
4. crate prisma.ts file f.ex in /prisma folder to handle prisma conections
5. run npm install nexus
   - use nexus to create schema
   - use nexus to create types and queries in types folder
6. create /pages/api/graphql.ts file run the grahpql in there
7. api should be up and running

## API ClientSide

1. run npm install @apollo/client
2. setup apolloClient in /lib/apollo.ts
3. wrap whole app with apollo provider
4. query as much as you want

## Auth0

1. follow https://auth0.com/docs/quickstart/webapp/nextjs/interactive
2. follow https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/ to get the token
3. There is a lot of reading but in short:
   - setup .env
   - [...auth0].js file in api folder
   - wrap thea app in UserPrivider
   - use <a href="/api/auth/login">Login</a> to login
   - on api user getSession to get the tokens
4. add "graphql-shield": "7.5.0", "graphql-middleware": "6.0.9", to package.json IMPORTANT!!! use those versions thay are tested and work while new updates have some compatibility problems also make sure graphql version is 15
5. crate auth folder in graphql folder with rules folder index.ts
6. apply the middleware in graphql/index.ts
7. Update db to include User field, now match auth token provided with request with existing data

EVERYTHING DONE
