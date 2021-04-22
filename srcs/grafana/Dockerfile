FROM alpine:3.13.2

#EXPOSE 3000 9090

#HEALTHCHECK CMD (curl -I localhost:3000/api/health 2>&1 | grep "200 OK" && curl -v localhost:9090/-/healthy 2>&1 | grep "200 OK") || exit 1

#VOLUME /usr/share/grafana

RUN apk add --no-cache grafana

WORKDIR /usr/share/grafana

COPY srcs/grafana.db /usr/share/grafana/data/

COPY srcs/defaults.ini /usr/share/grafana/conf/

COPY srcs/ssl-cert-snakeoil.key /etc/ssl/private/

COPY srcs/ssl-cert-snakeoil.pem /etc/ssl/certs/

CMD grafana-server
