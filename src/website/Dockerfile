# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV=production
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /var/www/webapp
COPY server/nginx.conf /etc/nginx/nginx.conf
COPY server/entrypoint.sh /

RUN set -x ; \
  addgroup -g 82 -S www-data ; \
adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

EXPOSE 80
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]