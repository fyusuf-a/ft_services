FROM alpine:3.13

EXPOSE 9090
EXPOSE 3000

RUN apk add --no-cache grafana prometheus

COPY srcs/prometheus.yml /

WORKDIR /usr/share/grafana

COPY srcs/grafana.db /usr/share/grafana/data/grafana.db

RUN touch /var/log/grafana.log && \
	touch /var/log/prometheus.log

CMD prometheus --config.file=/prometheus.yml > /var/log/grafana.log & grafana-server > /var/log/prometheus.log & tail -f /var/log/grafana.log /var/log/prometheus.log
