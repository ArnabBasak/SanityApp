
from flask import Flask
from flask import render_template
from flask import redirect
from flask import request
from flask import url_for
app = Flask(__name__)
@app.route("/",methods = ['GET','POST'])
def main():
    """This is a main method"""
    error = None
    if request.method == 'GET':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid username/password'
        else:
            return render_template(url_for('signup.html'))
    return render_template('index.html', error=error)
@app.route("/signup.html/")
def signup():
     """ this is a signup method"""
     return render_template('signup.html')
if __name__ == "__main__":
    app.run()
