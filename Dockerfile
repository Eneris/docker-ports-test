FROM ubuntu:latest

WORKDIR /var/www
COPY . /var/www

CMD [ "npm start" ]