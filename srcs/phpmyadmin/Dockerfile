FROM alpine:3.13.2

EXPOSE 5000

HEALTHCHECK CMD curl -kI https://localhost:5000 2>&1 | grep "200 OK" || exit 1

ENV WORDPRESS_DB_HOST=mysql WORDPRESS_DB_USER=user WORDPRESS_DB_PASSWORD=pass

RUN apk add --no-cache nginx phpmyadmin php7-fpm php7-session openssl curl

# nginx
RUN ln -sf /dev/stdout /var/log/nginx/access.log ; \
	ln -sf /dev/stderr /var/log/nginx/error.log

# php-fpm
COPY srcs/fastcgi-php.conf /etc/nginx/fastcgi-php.conf
COPY srcs/php-fpm.conf /etc/php7/php-fpm.conf

COPY srcs/default.conf /etc/nginx/conf.d/default.conf

# SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

# Next line is to prevent error from the nginx executable not able to create a directory in /run
RUN mkdir -p /run/nginx

COPY srcs srcs/config.inc.php /etc/phpmyadmin/

WORKDIR /usr/share/webapps/phpmyadmin

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
