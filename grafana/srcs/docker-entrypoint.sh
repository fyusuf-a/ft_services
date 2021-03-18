[ ! -d /usr/share/grafana/conf ] && cp -R /grafana-files/conf /usr/share/grafana/conf
[ ! -d /usr/share/grafana/public ] && cp -R /grafana-files/public /usr/share/grafana/public
rm -rf grafana-files
if [ ! -f /usr/share/grafana/data/grafana.db ]; then
	mkdir -p /usr/share/grafana/data
	cp /grafana.db /usr/share/grafana/data/grafana.db
fi
rm /grafana.db

grafana-server > /var/log/grafana.log &
tail -f /var/log/grafana.log
