php-fpm7 -D

CONTINUE_SCRIPT=1
while [ $CONTINUE_SCRIPT = 1 ]; do
	nc -z -w 2 $WORDPRESS_DB_HOST
	if [ $? = 0 ]; then
		CONTINUE_SCRIPT=0
	fi
done

nginx -g 'daemon off;'
