FROM node:22.11-alpine 

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

COPY . .

RUN yarn install

RUN yarn build

CMD ["node", ".output/server/index.mjs"]
