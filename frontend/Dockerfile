# Stage 1 - build
FROM node:lts-slim AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# Stage 2 - final
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]