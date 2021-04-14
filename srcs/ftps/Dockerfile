FROM alpine:3.13.2

ARG IP

ENV IP=$IP

EXPOSE 21
EXPOSE 21000-21010

#HEALTHCHECK CMD nc -zn localhost 21 || exit 1

RUN apk add --no-cache vsftpd
#openssl && openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/vsftpd/vsftpd.key -out /etc/vsftpd/vsftpd.cert.pem -subj '/CN=localhost'

COPY srcs/vsftpd.conf /etc/vsftpd/vsftpd.conf

COPY srcs/priv.key /etc/vsftpd/vsftpd.key
COPY srcs/cert.pem /etc/vsftpd/vsftpd.cert.pem

COPY srcs/vsftpd.conf /etc/vsftpd/vsftpd.conf

COPY srcs/root/* /

RUN mkdir -p /var/ftp/anonymous && chown ftp:ftp /var/ftp/anonymous ; \
	touch /var/log/vsftpd.log ; \
	chmod +x /docker-entrypoint.sh

#VOLUME /var/ftp/

CMD sh /docker-entrypoint.sh
