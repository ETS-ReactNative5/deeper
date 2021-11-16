#from flask import current_app as app
#from app import mongo
#import random
import string
import hashlib



def encrypt(password): #should be intergrated to front
    salt = "tyuhjhjklnm"
    saltedPassword = password + salt
    hasher = hashlib.sha256(saltedPassword.encode())
    hashedPassword = hasher.hexdigest()
    return hashedPassword

#decrypt in backend
#def decrypt(encoded, salt_10):