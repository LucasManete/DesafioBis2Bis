FROM node:16.14

WORKDIR /app

COPY . .

RUN npm i

RUN npm i -g nodemon

CMD ["npm", "run", "dev"]