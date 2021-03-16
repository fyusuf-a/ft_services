FROM alpine:3.12

EXPOSE 8086

VOLUME /root/.influxdb

RUN apk add --no-cache influxdb

COPY srcs/create.iql /

COPY srcs/init_files /

RUN influxd > /dev/null 2>&1 & sleep 1 ; \
	influx < /create.iql ; \
	rm create.iql

RUN touch /var/log/influxdb.log

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
