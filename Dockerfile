FROM node:24
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE ${APP_PORT}
CMD ["sh", "-c", "npx prisma db init && npx tsx src/prisma/seed.ts && node dist/main"]
