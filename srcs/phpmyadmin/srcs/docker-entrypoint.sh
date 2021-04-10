php-fpm7 -D

CONTINUE_SCRIPT=1
while [ $CONTINUE_SCRIPT = 1 ]; do
	nc -z -w 2 $WORDPRESS_DB_HOST
	if [ $? = 0 ]; then
		sed -i 's/%WORDPRESS_DB_HOST%/'$WORDPRESS_DB_HOST'/g' /etc/phpmyadmin/config.inc.php
		sed -i 's/%WORDPRESS_DB_USER%/'$WORDPRESS_DB_USER'/g' /etc/phpmyadmin/config.inc.php
		sed -i 's/%WORDPRESS_DB_PASSWORD%/'$WORDPRESS_DB_PASSWORD'/g' /etc/phpmyadmin/config.inc.php
		CONTINUE_SCRIPT=0
	fi
done

nginx -g 'daemon off;'
