[ ! -d /usr/share/grafana/conf ] && cp -R /grafana-files/conf /usr/share/grafana/conf
[ ! -d /usr/share/grafana/public ] && cp -R /grafana-files/public /usr/share/grafana/public
rm -rf grafana-files
if [ ! -f /usr/share/grafana/data/grafana.db ]; then
	mkdir -p /usr/share/grafana/data
	cp /grafana.db /usr/share/grafana/data/grafana.db
fi
rm -f /grafana.db

prometheus --config.file=/prometheus.yml > /var/log/prometheus.log &
grafana-server > /var/log/grafana.log &
tail -fv /var/log/grafana.log /var/log/prometheus.log
