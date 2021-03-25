php-fpm7 -D

CONTINUE_SCRIPT=1
while [ $CONTINUE_SCRIPT = 1 ]; do
	nc -z -w 2 $WORDPRESS_DB_HOST 3306
	if [ $? = 0 ]; then
		wp config create --dbname=$WORDPRESS_DB_NAME --dbuser=$WORDPRESS_DB_USER --dbpass=$WORDPRESS_DB_PASSWORD --dbhost=$WORDPRESS_DB_HOST 2>/dev/null
		wp core install --url=$URL --title=$TITLE --admin_user=$ADMIN_USER --admin_email=$ADMIN_EMAIL --admin_password=$ADMIN_PASSWORD --skip-email
		wp user create $EDITOR_USER $EDITOR_EMAIL --user_pass=$EDITOR_PASSWORD 2>/dev/null
		wp user create $AUTHOR_USER $AUTHOR_EMAIL --user_pass=$AUTHOR_PASSWORD 2>/dev/null
		CONTINUE_SCRIPT=0
	fi
done

nginx -g 'daemon off;'
