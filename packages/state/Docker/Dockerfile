FROM node:18-alpine as build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

ARG env
ENV ENV $env

COPY . .
RUN Docker/build.sh

FROM nginx:stable as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]