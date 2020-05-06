FROM node:10-alpine3.11

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]