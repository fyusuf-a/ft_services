influxd > /dev/null 2>&1 & sleep 5 ; \
	influx <<CREATE
CREATE DATABASE prometheus
CREATE

tail -f /var/log/influxdb.log
