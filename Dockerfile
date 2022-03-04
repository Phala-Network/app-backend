FROM node:16-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
COPY .yarn/plugins ./.yarn/plugins
COPY package.json yarn.lock .yarnrc.yml ./
RUN corepack enable
RUN corepack prepare

FROM base AS build
COPY . .
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn
RUN yarn generate:prisma
RUN yarn build

FROM base AS prod
COPY . .
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn workspaces focus --production

FROM base
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=build /app/node_modules/@generated /app/node_modules/@generated
COPY --from=build /app/dist /app/dist

EXPOSE 4000
CMD ["yarn", "start"]
