FROM alpine

EXPOSE 5050
#EXPOSE 443

HEALTHCHECK CMD curl -kI https://localhost:5050 2>&1 | grep "200 OK" || exit 1

ARG WORDPRESS_DB_HOST=mysql
ARG WORDPRESS_DB_USER=user
ARG WORDPRESS_DB_PASSWORD=pass
ARG WORDPRESS_DB_NAME=wordpress

# TODO test which mysql library is useful
RUN apk add --no-cache nginx php7-fpm php7-mysqli php7-mysqlnd php7-mbstring php7-json php7-phar openssl mysql-client

# nginx
RUN rm /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log ; \
		ln -sf /dev/stderr /var/log/nginx/error.log

# php-fpm
COPY srcs/fastcgi-php.conf /etc/nginx/fastcgi-php.conf
#####COPY srcs/php.ini /etc/php7/conf.d/50-settings.ini
COPY srcs/php-fpm.conf /etc/php7/php-fpm.conf

COPY srcs/default.conf /etc/nginx/conf.d/default.conf

# SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

# Next line is to prevent error from the nginx executable not able to create a directory in /run
RUN mkdir -p /run/nginx

# Installing wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

RUN mkdir -p /var/www/html

RUN wp core download --path=/var/www/html/wordpress

WORKDIR /var/www/html/wordpress

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
