FROM node:20

WORKDIR user/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .