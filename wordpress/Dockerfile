FROM alpine

# TODO test which mysql library is useful
RUN apk add --no-cache nginx php7-fpm php7-mysqli php7-mysqlnd php7-mbstring

# nginx
#RUN rm /etc/nginx/sites-enabled/default /var/www/html/index.nginx-debian.html

RUN ln -sf /dev/stdout /var/log/nginx/access.log ;\
		ln -sf /dev/stderr /var/log/nginx/error.log

# wordpress
#RUN curl -L https://wordpress.org/latest.tar.gz | tar -xz -C /var/www/html
#COPY srcs/wordpress.conf /etc/nginx/sites-available/wordpress.conf
#RUN sed -i 's+%ROOT_DIR%+'$ROOT_DIR'+g' /etc/nginx/sites-available/wordpress.conf ; \
		#sed -i 's/%AUTOINDEX%/'$AUTOINDEX'/g' /etc/nginx/sites-available/wordpress.conf ; \
		#ln -s /etc/nginx/sites-available/wordpress.conf /etc/nginx/sites-enabled/wordpress.conf ; \
		#rm /var/www/html/wordpress/wp-config-sample.php
#COPY srcs/wp-config.php /var/www/html/wordpress/

# SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/ssl-cert-snakeoil.key -out /etc/ssl/certs/ssl-cert-snakeoil.pem -subj '/CN=localhost'

EXPOSE 80
EXPOSE 443

#CMD service php7.3-fpm start && \
		#service nginx start && \
		#sleep infinity
