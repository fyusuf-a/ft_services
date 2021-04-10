minikube delete
minikube start --vm-driver=docker
IP=$(minikube ip)

cat srcs/metallb.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

eval $(minikube -p minikube docker-env)
docker build srcs/mysql -t mysql
docker build srcs/influxdb -t influxdb
docker build srcs/ftps -t ftps --build-arg IP=$IP
docker build srcs/wordpress -t wordpress
docker build srcs/phpmyadmin -t phpmyadmin
docker build srcs/nginx -t nginx --build-arg WORDPRESS_EXTERNAL_NAME=$IP --build-arg PHPMYADMIN_DNS_NAME='phpmyadmin'
docker build srcs/grafana -t grafana

kubectl apply -f srcs/mysql.yaml
kubectl apply -f srcs/influxdb.yaml
kubectl apply -f srcs/ftps.yaml
cat srcs/wordpress.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
kubectl apply -f srcs/phpmyadmin.yaml
kubectl apply -f srcs/nginx.yaml
kubectl apply -f srcs/grafana.yaml
