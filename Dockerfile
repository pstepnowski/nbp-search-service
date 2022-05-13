# syntax=docker/dockerfile:1
FROM node:18 as builder

#ENV NODE_ENV=production
WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install
COPY . .
RUN yarn build

FROM node:18



WORKDIR /app

COPY --from=builder ["/app/package.json", "/app/yarn.lock*", "./"]

RUN yarn install --production

COPY --from=builder /app/dist ./dist

RUN npm link

ENTRYPOINT ["/usr/local/bin/nbp-serach-best-investment"]
