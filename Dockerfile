FROM node:8

WORKDIR /derp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
