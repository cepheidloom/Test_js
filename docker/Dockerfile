FROM node:20.11-alpine

COPY package.json /app/
COPY main.js /app/
#note that the slash '/' is very important because it
#tell docker to create app folder if it doesn't exist


WORKDIR /app

RUN npm install
RUN node main.js

CMD ["node","main.js"]