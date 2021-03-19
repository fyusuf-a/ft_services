FROM alpine:3.12

EXPOSE 8086

HEALTHCHECK CMD curl -s localhost:8086/health | grep "ready for queries" || exit 1

VOLUME /root/.influxdb

RUN apk add --no-cache influxdb curl

RUN touch /var/log/influxdb.log

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
