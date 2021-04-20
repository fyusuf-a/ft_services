minikube delete
minikube start --cpus 2 --vm-driver=docker #--extra-config=kubelet.CAdvisorPort=4194
IP=$(minikube ip)
#IP=192.168.49.1
minikube addons enable metrics-server

# Generation of certificates
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout ssl-cert-snakeoil.key -out ssl-cert-snakeoil.pem -subj '/CN=localhost'
ln -f $PWD/ssl-cert-snakeoil.key $PWD/srcs/ftps/srcs/priv.key
ln -f $PWD/ssl-cert-snakeoil.pem $PWD/srcs/ftps/srcs/cert.pem
ln -f $PWD/ssl-cert-snakeoil.key $PWD/srcs/wordpress/srcs/priv.key
ln -f $PWD/ssl-cert-snakeoil.pem $PWD/srcs/wordpress/srcs/cert.pem
ln -f $PWD/ssl-cert-snakeoil.key $PWD/srcs/phpmyadmin/srcs/priv.key
ln -f $PWD/ssl-cert-snakeoil.pem $PWD/srcs/phpmyadmin/srcs/cert.pem
ln -f $PWD/ssl-cert-snakeoil.key $PWD/srcs/nginx/srcs/priv.key
ln -f $PWD/ssl-cert-snakeoil.pem $PWD/srcs/nginx/srcs/cert.pem

# Installation of metallb
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.6/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.6/manifests/metallb.yaml
cat srcs/metallb.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

# Authorization via a service account of Prometheus
kubectl apply -f srcs/prometheus.yaml

eval $(minikube -p minikube docker-env)
docker build srcs/mysql -t mysql
kubectl apply -f srcs/mysql.yaml

docker build srcs/influxdb -t influxdb
kubectl apply -f srcs/influxdb.yaml

docker build srcs/ftps -t ftps --build-arg IP=$IP
kubectl apply -f srcs/ftps.yaml

docker build srcs/wordpress -t wordpress
cat srcs/wordpress.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -

docker build srcs/phpmyadmin -t phpmyadmin
kubectl apply -f srcs/phpmyadmin.yaml

docker build srcs/nginx -t nginx --build-arg WORDPRESS_EXTERNAL_NAME=$IP --build-arg PHPMYADMIN_DNS_NAME='phpmyadmin'
kubectl apply -f srcs/nginx.yaml

docker build srcs/grafana -t grafana
kubectl apply -f srcs/grafana.yaml

docker build srcs/telegraf -t telegraf --build-arg IP=$IP
kubectl apply -f srcs/telegraf.yaml
