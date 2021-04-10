minikube delete
minikube start --vm-driver=docker
IP=$(minikube ip)

cat metallb.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

eval $(minikube -p minikube docker-env)
docker build ftps -t ftps --build-arg IP=$IP
docker build wordpress -t wordpress
docker build mysql -t mysql
docker build phpmyadmin -t phpmyadmin
docker build nginx -t nginx --build-arg WORDPRESS_EXTERNAL_NAME=$IP --build-arg PHPMYADMIN_DNS_NAME='phpmyadmin'

kubectl apply -f ftps.yaml
cat wordpress.yaml | sed "s/%IP%/$IP/g" | kubectl apply -f -
kubectl apply -f mysql.yaml
kubectl apply -f phpmyadmin.yaml
kubectl apply -f nginx.yaml
