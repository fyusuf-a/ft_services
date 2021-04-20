FROM alpine:3.13.2

#EXPOSE 80 443

ARG WORDPRESS_EXTERNAL_NAME=localhost
ARG PHPMYADMIN_DNS_NAME=phpmyadmin

#HEALTHCHECK CMD curl -I localhost 2>&1 | grep "Location: https://localhost" \
	#&& curl -kI https://localhost/wordpress 2>&1 | grep "307 Temporary Redirect" \
	#&& curl -kI https://localhost/phpmyadmin/ 2>&1 | grep "200 OK" \
	#|| exit 1

COPY srcs/default.conf /etc/nginx/http.d/default.conf

RUN apk add --no-cache nginx curl; \
	ln -sf /dev/stdout /var/log/nginx/access.log ; \
	ln -sf /dev/stderr /var/log/nginx/error.log ; \
	sed -i "s/%WORDPRESS_EXTERNAL_NAME%/$WORDPRESS_EXTERNAL_NAME/g" /etc/nginx/conf.d/default.conf ; \
	sed -i "s/%PHPMYADMIN_DNS_NAME%/$PHPMYADMIN_DNS_NAME/g" /etc/nginx/conf.d/default.conf ; \
	mkdir -p /run/nginx
# apk add --no-cache nginx openssl
# openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

COPY srcs/priv.key /etc/ssl/private/ssl-cert-snakeoil.key
COPY srcs/cert.pem /etc/ssl/certs/ssl-cert-snakeoil.pem

CMD nginx -g 'daemon off;'
