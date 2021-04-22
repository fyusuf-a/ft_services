influxd > /dev/null 2>&1 & sleep 5 ; \
	influx <<CREATE
CREATE DATABASE telegraf
CREATE

tail -f /var/log/influxdb.log
