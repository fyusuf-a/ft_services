FROM alpine:3.13

EXPOSE 3000

VOLUME /usr/share/grafana

RUN apk add --no-cache grafana

WORKDIR /usr/share/grafana

#COPY srcs/grafana.db /usr/share/grafana/data/grafana.db

RUN touch /var/log/grafana.log

COPY srcs/grafana-files /grafana-files

COPY srcs/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

CMD /entrypoint.sh && 
