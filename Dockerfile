FROM node:16
WORKDIR /app
ENV NODE_ENV=production
COPY .yarnrc.yml ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY .yarn/patches ./.yarn/patches
COPY prisma ./prisma
COPY src ./src
RUN corepack enable
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn --immutable
RUN yarn generate:prisma
RUN yarn build

EXPOSE 4000
CMD ["yarn", "start"]
