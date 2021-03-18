FROM alpine:3.13

EXPOSE 9090

RUN apk add --no-cache prometheus

COPY srcs/prometheus.yml /

RUN  touch /var/log/prometheus.log

#RUN chmod +x /entrypoint.sh

CMD prometheus --config.file=/prometheus.yml > /var/log/prometheus.log & tail -f /var/log/prometheus.log
