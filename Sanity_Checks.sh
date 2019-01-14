#!/usr/bin/bash
#!/usr/bin/expect

PASSWORD="be4nsh00t"
INPUT=./inputfile.txt
USR=techsupp
TMP=/tmp
LOG_FILE=/var/log/Sanity_checks.log

function1()
{

while read SER_IP           
do           
	echo "Performing checks on $SER_IP" #| tee -a $LOG_FILE
	/usr/bin/expect <<EOF

	spawn scp ./script.sh $USR@$SER_IP:$TMP
	expect { 
		(yes/no)? { send "yes\r"; exp_continue}
         	password: {send "$PASSWORD\r" ; exp_continue}
	       }	

      	spawn ssh $USR@$SER_IP 'bash' < $TMP/script.sh
	set timeout 120
	expect {

        	(yes/no)? { send "yes\r"; exp_continue}
	         password: {send "$PASSWORD\r" ; exp_continue}

		eof exit
        }
	eof {
	       close
	    }
     
	interact
	expect eof
EOF
done < $INPUT

}

function1 >> $LOG_FILE
