FROM alpine:3.13.2

#EXPOSE 5050

#HEALTHCHECK CMD curl -kI https://localhost:5050 2>&1 | grep "200 OK" || exit 1

ENV WORDPRESS_DB_HOST=mysql WORDPRESS_DB_USER=user WORDPRESS_DB_PASSWORD=pass WORDPRESS_DB_NAME=wordpress \
	URL=localhost:5050 TITLE=ft_services \
	ADMIN_USER=admin ADMIN_EMAIL=admin@example.org ADMIN_PASSWORD=password \
	EDITOR_USER=editor EDITOR_EMAIL=editor@example.org EDITOR_PASSWORD=password AUTHOR_USER=author AUTHOR_EMAIL=author@example.org AUTHOR_PASSWORD=password

RUN apk add --no-cache nginx php7-fpm php7-mysqli php7-mbstring php7-json php7-phar mysql-client ; \
	ln -sf /dev/stdout /var/log/nginx/access.log ; \
	ln -sf /dev/stderr /var/log/nginx/error.log ; \
	mkdir -p /run/nginx ; \
	wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp ; \
	mkdir -p /var/www/html ; \
	wp core download --path=/var/www/html/wordpress
# apk add --no-cache curl openssl
# openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost' ; \

COPY srcs/priv.key /etc/ssl/private/ssl-cert-snakeoil.key
COPY srcs/cert.pem /etc/ssl/certs/ssl-cert-snakeoil.pem

# php-fpm
COPY srcs/fastcgi-php.conf /etc/nginx/fastcgi-php.conf

COPY srcs/php-fpm.conf /etc/php7/php-fpm.conf

COPY srcs/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html/wordpress

COPY srcs/docker-entrypoint.sh /

#RUN chmod +x /docker-entrypoint.sh

CMD sh /docker-entrypoint.sh
