FROM alpine

RUN apk add --no-cache --no-progress vsftpd openssl && openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/vsftpd/vsftpd.key -out /etc/vsftpd/vsftpd.cert.pem -subj '/CN=localhost'

COPY vsftpd.conf /etc/vsftpd/vsftpd.conf

EXPOSE 21
EXPOSE 21000-21010

RUN mkdir -p /var/ftp/anonymous && chown ftp:ftp /var/ftp/anonymous

COPY README.txt /var/ftp/

RUN touch /var/log/vsftpd.log

CMD vsftpd /etc/vsftpd/vsftpd.conf 0>> /var/log/vsftpd.log & tail -f /var/log/vsftpd.log
