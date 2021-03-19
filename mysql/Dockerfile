FROM alpine:3.7

EXPOSE 3306

HEALTHCHECK CMD mysql -e "show databases;" || exit 1

RUN apk add --no-cache mysql mysql-client

RUN mkdir -p /run/mysqld && chown -R mysql:mysql /run/mysqld

COPY srcs/create.sql ./

COPY srcs/docker-entrypoint.sh ./

EXPOSE 3306

RUN mkdir /data

VOLUME /data

CMD sh docker-entrypoint.sh
