FROM alpine:3.13

EXPOSE 3000

VOLUME /usr/share/grafana

RUN apk add --no-cache grafana

WORKDIR /usr/share/grafana

RUN touch /var/log/grafana.log

COPY srcs/grafana-files /grafana-files
COPY srcs/grafana.db /

COPY srcs/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
