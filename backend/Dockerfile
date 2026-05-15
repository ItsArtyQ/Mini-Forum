FROM node:lts-slim

RUN apt-get update -y \
&& apt-get install -y openssl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run db:generate
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run db:deploy && npm run start"]