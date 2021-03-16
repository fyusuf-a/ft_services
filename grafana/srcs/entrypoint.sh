[ ! -d /usr/share/grafana/conf ] && cp -R /grafana-conf /usr/share/grafana/conf ; rm -rf /grafana-conf
[ ! -d /usr/share/grafana/public ] && cp -R /grafana-public /usr/share/grafana/public ; rm -rf /grafana-public
