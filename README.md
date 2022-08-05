# assign_zigyprints
To check the assign 
Install mongo Compass on local machine and Postman
Following Steps should be followed:

Start server
1.npm i 
2.npm start

In postman 
1.To add user
Set request type = post 
url = http://localhost:8000/addUser
and in body select raw and object of type JSON(application/json) should be selected

{
	"fname":"Zigy",
	"lname":"Prints",
    "email": "zigyprints@gmail.com",
    "phone":7903165083
}

2.To delete user
Set request type = delete 
url = http://localhost:8000/deleteUser
and in body select raw and object of type JSON(application/json) should be selected

{
    "email": "zigyprints@gmail.com"
}

In mongoDb Compass:
following data is reflected in database with db 'zigy' collection name 'users'
