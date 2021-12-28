FROM node:16.13.0

WORKDIR /usr/src/app
COPY .env.production .env
COPY prisma ./prisma
COPY dist ./dist
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .

RUN corepack enable
RUN yarn
RUN yarn generate:prisma

EXPOSE 4000
CMD ["yarn", "start"]
