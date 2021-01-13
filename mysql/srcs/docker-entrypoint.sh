mysql_install_db --user=mysql > /dev/null
mysqld --user=mysql --datadir=/data --init-file=/create.sql
