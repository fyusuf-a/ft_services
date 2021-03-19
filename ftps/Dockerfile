FROM alpine:3.13.2

EXPOSE 21
EXPOSE 21000-21010

HEALTHCHECK CMD nmap -p21 localhost | grep open || exit 1

RUN apk add --no-cache --no-progress vsftpd openssl nmap && openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/vsftpd/vsftpd.key -out /etc/vsftpd/vsftpd.cert.pem -subj '/CN=localhost'

COPY srcs/vsftpd.conf /etc/vsftpd/vsftpd.conf

RUN mkdir -p /var/ftp/anonymous && chown ftp:ftp /var/ftp/anonymous

VOLUME /var/ftp/

COPY srcs/README.txt /

RUN touch /var/log/vsftpd.log

COPY srcs/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /docker-entrypoint.sh
