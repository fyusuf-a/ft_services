if [ -z "$(ls -A /data)" ]; then
	mysql_install_db --user=mysql > /dev/null
fi
mysqld --user=mysql --datadir=/data --init-file=/create.sql
