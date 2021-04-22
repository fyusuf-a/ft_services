FROM alpine:3.13.2

#EXPOSE 8086

#HEALTHCHECK CMD curl -s localhost:8086/health | grep "ready for queries" || exit 1

#VOLUME /root/.influxdb

RUN apk add --no-cache influxdb
#curl

COPY srcs/docker-entrypoint.sh /

RUN touch /var/log/influxdb.log

CMD sh docker-entrypoint.sh
