# GraphQL, TypeScript, Nextjs, Prisma, Nexus Scehma boilerplate

A boilerplate references code to startt a project with Apollo GraphQL, Next.js, Nexus schema and TypeScript.

Contains Temporary models in prisma schema.

## To get started:

- Clone the repo

```bash
git clone https://github.com/k4u5h4L/GraphQL-TypeScript-prisma-Nextjs-Nexus-boilerplate && cd GraphQL-TypeScript-prisma-Nextjs-Nexus-boilerplate
```

- Install needed dependencies

```bash
yarn install
```

- (Optional) Add values to the DB

```bash
npx prisma studio
```

- Create a file called `.env` in the root and fill in needed values taking `.env.example` as reference.

- Start the development server and visit [localhost:3000](http://localhost:3000) to view the site. Also, visit the GraphQL playground at [/api/graphql](http://localhost:3000/api/graphql) in development mode.

```bash
yarn dev
```

Well, that's about it. You should be up and running with a minimal GraphQL client and server in Next.js!!

## Note:

- This is just a reference repo. Nothing significant has been done here yet.
- There may be some mistakes. If you find any, please send a PR if you know how to solve it, or visit the `issues` tab and log an issue there.
- Any contribution is welcome. Please give it a fork, and send me a PR!
