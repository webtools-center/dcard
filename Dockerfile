FROM node:24-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE ${APP_PORT}
CMD ["sh", "-c", "npx prisma db init && npx tsx src/prisma/seed.ts && npm run start:prod"]
