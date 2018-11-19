FROM node:11

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL $REACT_APP_API_URL

RUN mkdir /app

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app
