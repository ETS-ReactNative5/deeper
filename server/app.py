from flask import Flask, request, Response, session
from flask_pymongo import PyMongo

import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext

import Authentication

#connect mongodb server on localhost port: 27017
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/deeper"
mongo = PyMongo(app)
mongo.db




#app = Flask(__name__)

#test if online:
@app.route('/online')
def hello():
    return "We're in!"


@app.route('/login', methods=['GET'])
def login():
    name = request.form['email']
    passwd_input = request.form['password']
    user = mongo.db.users.find_one({'Email': name})
    if user:
        print(Authentication.encrypt(passwd_input))
        if user["Password"] == Authentication.encrypt(passwd_input):
            #resp = Flask.make_response("123")
            resp = {"key": "SID", "value": ["success"]} #need to change later
            return "Success"
            #return Response(status=200)
        return "password incorrect"
        #return Response(status=400)
    return "User is null"
    #return Response(status=400)
            
        
@app.route('/signup', methods=['GET'])
def signup():
    username = request.form['username']
    email = request.form['email']
    passwd_input = request.form['password']
    if (mongo.db.users.find_one({'Email': email}) or mongo.db.users.find_one({'Username': username})):
        return "Email or Username already exist."
    enc_passwd = Authentication.encrypt(passwd_input)
    mongo.db.users.insert({"Username": username, "Email": email, "Password": enc_passwd})
    conn = sqlite3.connect("./db/user_db.db")
    cur = conn.cursor()
    cur.execute("INSERT INTO user (uuid, email) VALUES (??)", (uuid, email))
    conn.commit()
    conn.close()
    return "Signed up"

#@app.route('')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="4000", debug=True)