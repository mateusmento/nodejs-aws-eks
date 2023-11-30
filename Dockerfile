FROM node:18.12.1-alpine as build
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index"]

