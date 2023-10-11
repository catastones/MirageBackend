FROM node:18 as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .env ./

COPY . .

EXPOSE 3055

CMD [ "npm", "run", "dev" ]