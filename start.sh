minikube delete
minikube start --cpus 2 --vm-driver=docker
IP=$(minikube ip)
minikube addons enable metrics-server

# Installation of metallb
cat srcs/metallb.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

# Installation of prometheus
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
