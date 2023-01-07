ARG PORT
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json /
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN sed -i 's/PORT/$PORT/g' /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/chess-matcher-front /usr/share/nginx/html