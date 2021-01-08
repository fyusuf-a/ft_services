FROM alpine

# TODO test which mysql library is useful
RUN apk add --no-cache nginx php7-fpm php7-mysqli php7-mysqlnd php7-mbstring php7-json openssl

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

# SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

EXPOSE 80
EXPOSE 443

# Next line is to prevent error from the nginx executable not able to create a directory in /run
RUN mkdir -p /run/nginx

CMD php-fpm7 -D \
	&& nginx -g 'daemon off;'
