FROM alpine

ARG WORDPRESS_DB_HOST
ARG WORDPRESS_DB_USER
ARG WORDPRESS_DB_PASSWORD
ARG WORDPRESS_DB_NAME

RUN WORDPRESS_DB_HOST=${WORDPRESS_DB_HOST:-localhost} && \
		WORDPRESS_DB_USER=${WORDPRESS_DB_USER:-user} && \
		WORDPRESS_DB_PASSWORD=${WORDPRESS_DB_PASSWORD:-pass} && \
		WORDPRESS_DB_NAME=${WORDPRESS_DB_NAME:-wordpress}

# TODO test which mysql library is useful
RUN apk add --no-cache nginx php7-fpm php7-mysqli php7-mysqlnd php7-mbstring php7-json php7-phar openssl

# nginx
RUN rm /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log ; \
		ln -sf /dev/stderr /var/log/nginx/error.log

# php-fpm
COPY srcs/fastcgi-php.conf /etc/nginx/fastcgi-php.conf
#COPY srcs/php.ini /etc/php7/conf.d/50-settings.ini
COPY srcs/php-fpm.conf /etc/php7/php-fpm.conf

# wordpress
RUN mkdir -p /var/www/html \
	&& wget https://wordpress.org/latest.tar.gz \
	&& tar -xzf latest.tar.gz -C /var/www/html wordpress; \
	rm latest.tar.gz

COPY srcs/default.conf /etc/nginx/conf.d/default.conf

RUN	rm /var/www/html/wordpress/wp-config-sample.php
COPY srcs/wp-config.php /var/www/html/wordpress/

COPY srcs/docker-entrypoint.sh /

# SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

EXPOSE 80
EXPOSE 443

# Next line is to prevent error from the nginx executable not able to create a directory in /run
RUN mkdir -p /run/nginx

RUN sed -i 's/%WORDPRESS_DB_HOST%/'$WORDPRESS_DB_HOST'/g' /var/www/html/wordpress/wp-config.php && \
		sed -i 's/%WORDPRESS_DB_USER%/'$WORDPRESS_DB_USER'/g' /var/www/html/wordpress/wp-config.php && \
		sed -i 's/%WORDPRESS_DB_PASSWORD%/'$WORDPRESS_DB_PASSWORD'/g' /var/www/html/wordpress/wp-config.php && \
		sed -i 's/%WORDPRESS_DB_NAME%/'$WORDPRESS_DB_NAME'/g' /var/www/html/wordpress/wp-config.php

# Installing wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

CMD sh /docker-entrypoint.sh
