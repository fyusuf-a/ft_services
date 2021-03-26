FROM alpine:3.13.2

EXPOSE 3306

HEALTHCHECK CMD (mysql -e "show databases;" && nc -zn localhost 3306) || exit 1

RUN apk add --no-cache mysql mysql-client

RUN sed -i 's/skip-networking/skip-networking=OFF/g' /etc/my.cnf.d/mariadb-server.cnf

RUN mkdir -p /run/mysqld && chown -R mysql:mysql /run/mysqld

COPY srcs/create.sql ./

COPY srcs/docker-entrypoint.sh ./

EXPOSE 3306

RUN mkdir /data

VOLUME /data

CMD sh docker-entrypoint.sh
