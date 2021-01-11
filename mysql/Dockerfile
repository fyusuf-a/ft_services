FROM alpine

RUN apk add --no-cache mariadb mariadb-client

RUN mkdir -p /run/mysqld

WORKDIR /usr/

COPY srcs/create.sql ./

RUN mysql_install_db --user=mysql

RUN mariadb < create.sql && \
		rm create.sql

EXPOSE 3306

CMD /usr/bin/mariadbd-safe --datadir='./data' ; sleep infinity
