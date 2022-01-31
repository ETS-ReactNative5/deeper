from flask import Flask, request, Response, session, make_response, jsonify
from flask_pymongo import PyMongo

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
    get_cookie = request.cookies.get('current_usr')
    if(get_cookie is not None):
        return "Already Signed in"
    name = request.form['email']
    passwd_input = request.form['password']
    user = mongo.db.users.find_one({'Email': name})
    if user:
        print(Authentication.encrypt(passwd_input))
        if user["Password"] == Authentication.encrypt(passwd_input):
            #resp = Flask.make_response("123")
            #resp = {"key": "SID", "value": ["success"]} #need to change later
            resp = make_response("setting_cookie")
            resp.set_cookie('current_usr', value= (user["Email"]), max_age= 604800)
            return resp
            #return "Success"
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
    return "Signed up"

@app.route('/forgot_password', methods=['GET'])
def password_reset():
    email = request.form['email']
    new_passwd = request.form['new_password']
    confirm_new = request.form['confirm_new']
    if (new_passwd == confirm_new):
        enc_passwd = Authentication.encrypt(confirm_new)
        mongo.db.users.update_one({'Email': email}, { '$set': {"Password": enc_passwd}})
        return "Successfully changed"
    else:
        return "Error"

@app.route('/journal_save', methods=['POST'])
def journal_save():
    current_usr = request.cookies.get('current_usr')
    entry = request.form['journal_entry']
    if current_usr is not None:
        user = mongo.db.journal.find_one({'Email': current_usr})
        if user is not None:
            mongo.db.journal.update({'Email': current_usr}, {'$push' : {'Entries': entry}})
            return "Successfully saved"
        if user is None:
            mongo.db.journal.insert({"Email": current_usr}, {'Entries': [entry]})
            return "Successfully created and saved entry"

            


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="4000", debug=True)