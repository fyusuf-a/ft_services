FROM alpine:3.12

EXPOSE 8086

VOLUME /root/.influxdb

RUN apk add --no-cache influxdb

RUN touch /var/log/influxdb.log

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
