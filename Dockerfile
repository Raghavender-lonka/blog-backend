FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000
CMD node server.js