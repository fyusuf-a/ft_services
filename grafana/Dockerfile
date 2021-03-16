FROM alpine:3.13

EXPOSE 9090
EXPOSE 3000

VOLUME /usr/share/grafana

RUN apk add --no-cache grafana prometheus

COPY srcs/prometheus.yml /

WORKDIR /usr/share/grafana

#COPY srcs/grafana.db /usr/share/grafana/data/grafana.db

RUN touch /var/log/grafana.log && \
	touch /var/log/prometheus.log

COPY srcs/conf /grafana-conf
COPY srcs/public /grafana-public

COPY srcs/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

CMD /entrypoint.sh && prometheus --config.file=/prometheus.yml > /var/log/prometheus.log & grafana-server > /var/log/grafana.log & tail -f /var/log/grafana.log /var/log/prometheus.log
