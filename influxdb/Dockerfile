FROM alpine:3.12

EXPOSE 8086

RUN apk add --no-cache influxdb

#RUN mkdir -p /var/lib/influxdb && \
	#chown influxdb:influxdb /var/lib/influxdb

COPY srcs/create.iql ./

RUN influxd > /dev/null 2>&1 & sleep 1 ; influx < create.iql

RUN touch /var/log/influxdb.log

CMD influxd > /var/log/influxdb.log 2>&1 & tail -f /var/log/influxdb.log
