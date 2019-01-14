from tkinter import *
from tkinter import messagebox
from tkinter import filedialog
import subprocess
import os
import re
Mainwindow = Tk()
Mainwindow.title('Sanity Checks')
Mainwindow.configure(background='darkgreen')
#background_image = PhotoImage(file="Specsavers.png")
#image_label = Label(Mainwindow,image=background_image)
#image_label.pack(side="top")
main_label = Label(Mainwindow,text="SANITY TEST FOR UK STORES",fg="white",font="Timesnewroman 20 bold")
main_label.configure(background='darkgreen')
main_label.pack(fill=X,pady=5)
text_label=Label(Mainwindow,text="Enter IP for the stores",fg="white",font="Timesnewroman 13 bold")
text_label.configure(background = 'darkgreen')
text_label.pack()
Mytext = Text(Mainwindow,width=30,height=5)
Mytext.pack(pady=10)
def callback():
    content = Mytext.get("1.0","end-1c")
    pattern = r"\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5    ]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b"
    if len(content) <= 2:
        messagebox.showerror('Input Error','improper input')
    elif re.match(pattern, content):
        try:
            inputfile_path = open('inputfile.txt','w')
            inputfile_path.write(content)
            inputfile_path.close()
        except:
            messagebox.showerror("File Error","Specified input file not found")
        try:
             if os.path.isfile('/var/log/Sanity_checks.log') == False:
                 subprocess.call(['bash','Sanity_Checks.sh'])
             elif os.stat('/var/log/Sanity_checks.log').st_size>0:
                 print('the file is not empty... cleaning the file')
                 outputfile = open('/var/log/Sanity_checks.log','r+')
                 outputfile.truncate()
                 subprocess.call(['bash','Sanity_Checks.sh'])
             else:
                  subprocess.call(['bash','Sanity_Checks.sh'])
        except:
             messagebox.showerror("Script error","unable to locate the script")
        try:
              messagebox.showinfo("File created","your file is ready")
              Mainwindow.destroy()
              filename = '/var/log/Sanity_checks.log'
              cmd = os.environ.get('EDITOR','vi') + ' ' + filename
              subprocess.call(cmd,shell=True)
        except:
              messagebox.showerror("File Error","Specified output file not found please browse to open the file")
              Mainwindow.destroy()
    else:
         messagebox.showerror('Input Error','Invalid Ip address')
Main_Button = Button(Mainwindow,text="Start",fg="darkgreen",font="calibari 13 bold", command=callback)
Main_Button.configure(background = "white")
Main_Button.pack()
w, h = Mainwindow.winfo_screenwidth(), Mainwindow.winfo_screenheight()
Mainwindow.geometry("%dx%d+0+0" % (w, h))
Mainwindow.mainloop()
