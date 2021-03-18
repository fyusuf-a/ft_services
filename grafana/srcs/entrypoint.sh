[ ! -d /usr/share/grafana/conf ] && cp -R /grafana-files/conf /usr/share/grafana/conf
[ ! -d /usr/share/grafana/public ] && cp -R /grafana/public /usr/share/grafana/public
grafana-server > /var/log/grafana.log &
tail -f /var/log/grafana.log
