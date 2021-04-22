FROM alpine:3.13.2

ARG IP
ENV IP=$IP

ENV DATABASE_DNS_NAME=influxdb

COPY /telegraf.conf /etc/telegraf/telegraf.conf

RUN apk add --no-cache telegraf ; \
	sed -i "s/%IP%/$IP/g" /etc/telegraf/telegraf.conf ; \
	sed -i "s/%DATABASE_DNS_NAME%/$DATABASE_DNS_NAME/g" /etc/telegraf/telegraf.conf

CMD telegraf
