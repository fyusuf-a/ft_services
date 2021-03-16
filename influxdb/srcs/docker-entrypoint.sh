INFLUXDB=/root/.influxdb
if [ ! -d $INFLUXDB/data ]; then
	echo lol
	#cp -R /init_files/data $INFLUXDB/data
fi
if [ ! -d $INFLUXDB/wal ]; then
	echo lol
	#cp -R /init_files/wal $INFLUXDB/wal
fi
if [ ! -d $INFLUXDB/meta ]; then
	echo lol
	#cp -R /init_files/meta $INFLUXDB/meta
fi
#rm -rf /init_files

#influxd > /var/log/influxdb.log 2>&1 & tail -f /var/log/influxdb.log
sleep infinity
