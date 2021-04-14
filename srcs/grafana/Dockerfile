FROM alpine:3.13.2

#EXPOSE 3000 9090

#HEALTHCHECK CMD (curl -I localhost:3000/api/health 2>&1 | grep "200 OK" && curl -v localhost:9090/-/healthy 2>&1 | grep "200 OK") || exit 1

#VOLUME /usr/share/grafana

RUN apk add --no-cache grafana prometheus
#curl

WORKDIR /usr/share/grafana

COPY srcs/grafana-files /grafana-files

COPY srcs/root/* /

RUN touch /var/log/grafana.log /var/log/prometheus.log
#; chmod +x /docker-entrypoint.sh

CMD sh /docker-entrypoint.sh
