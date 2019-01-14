cat /etc/redhat-release ;
cat /export/socrates/system/jsocver;
rpm -qa|grep ss-box;
mysql -uroot -pmysql -A soa -e "select count(*) as bridge_count from bridge_message\G";
mysql -uroot -pmysql -A soa -e "select * from sys_config where name like 'CLDG%'\G";
mysql -uroot -pmysql -A soa -e "select * from sys_config where name like 'Prb%'\G";
service socratesContainer status;
  
