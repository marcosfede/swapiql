FROM node:11

ARG API_URL

ENV API_URL $API_URL

RUN mkdir /app

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app
