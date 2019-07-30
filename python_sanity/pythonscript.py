import os
import re
import paramiko
import sys
import subprocess
import socket
def SanityChecks():
        username = "techsupp"
        password = "be4nsh00t"		
        inputfile = open("inputfile.txt","r")
        for host in devices:
                host = host.rstrip()
                for command in commands:
                        try:
                                ssh = paramiko.SSHClient()
                                ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
                                ssh.connect(host, username=username, password=password)
                                stdin, stdout, stderr = ssh.exec_command(command)
                                output = stdout.read()
                                data = []
                                data.extend([host,output])
                                for  element in data:
                                        print(element)
                        except(socket.error,paramiko.AuthenticationException):
                                tkMessageBox.showinfo("unreachable",host)
SanityChecks()
