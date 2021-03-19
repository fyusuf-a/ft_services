FROM alpine:3.13

EXPOSE 9090

HEALTHCHECK CMD curl -v localhost:9090/-/healthy 2>&1 | grep "200 OK" || exit 1

RUN apk add --no-cache prometheus curl

COPY srcs/prometheus.yml /

RUN  touch /var/log/prometheus.log

#RUN chmod +x /entrypoint.sh

CMD prometheus --config.file=/prometheus.yml > /var/log/prometheus.log & tail -f /var/log/prometheus.log
