[ ! -f /var/ftp/README.txt ] && mv /README.txt /var/ftp/
vsftpd /etc/vsftpd/vsftpd.conf -opasv_address=$IP 0>> /var/log/vsftpd.log &
tail -f /var/log/vsftpd.log
