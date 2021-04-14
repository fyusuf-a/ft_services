FROM alpine:3.13.2

#EXPOSE 3306

#HEALTHCHECK CMD (mysql -e "show databases;" && nc -zn localhost 3306) || exit 1

ENV MYSQL_DATABASE=wordpress MYSQL_USER=wordpress MYSQL_PASSWORD=password MYSQL_RANDOM_ROOT_PASSWORD='1'

RUN apk add --no-cache mysql mysql-client ; \
	sed -i 's/skip-networking/skip-networking=OFF/g' /etc/my.cnf.d/mariadb-server.cnf ; \
	mkdir -p /run/mysqld && chown -R mysql:mysql /run/mysqld ; \
	mkdir /data

COPY srcs/* ./

#VOLUME /data

CMD sh docker-entrypoint.sh
