FROM alpine:3.13.2

EXPOSE 80 443

ARG WORDPRESS_EXTERNAL_NAME=localhost
ARG PHPMYADMIN_DNS_NAME=phpmyadmin

HEALTHCHECK CMD curl -I localhost 2>&1 | grep "Location: https://localhost" \
	&& curl -kI https://localhost/wordpress 2>&1 | grep "307 Temporary Redirect" \
	&& curl -kI https://localhost/phpmyadmin/ 2>&1 | grep "200 OK" \
	|| exit 1

RUN apk add --no-cache nginx openssl curl

RUN ln -sf /dev/stdout /var/log/nginx/access.log ; \
	ln -sf /dev/stderr /var/log/nginx/error.log

COPY srcs/default.conf /etc/nginx/conf.d/default.conf

RUN sed -i "s/%WORDPRESS_EXTERNAL_NAME%/$WORDPRESS_EXTERNAL_NAME/g" /etc/nginx/conf.d/default.conf ; \
	echo $PHPMYADMIN_EXTERNAL_NAME ; \
	sed -i "s/%PHPMYADMIN_DNS_NAME%/$PHPMYADMIN_DNS_NAME/g" /etc/nginx/conf.d/default.conf ; \
	openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

# Next line is to prevent error from the nginx executable not able to create a directory in /run
RUN mkdir -p /run/nginx

CMD nginx -g 'daemon off;'
