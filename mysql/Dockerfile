FROM alpine:3.7

RUN apk add --no-cache mysql mysql-client bash

RUN mkdir -p /run/mysqld && chown -R mysql:mysql /run/mysqld

COPY srcs/create.sql ./

COPY srcs/docker-entrypoint.sh ./

EXPOSE 3306

RUN mkdir /data

VOLUME /data

#&& pkill -TERM mysqld
# && \
	#	rm -f create.sql
	#/usr/bin/mysqld --user=mysql --console

CMD sh docker-entrypoint.sh
