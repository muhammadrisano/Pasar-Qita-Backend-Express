# Pasar-Qita-Backend-Express
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port

## Installation
### Clone
```
$ git clone ttps://github.com/muhammadrisano/Pasar-Qita-Backend-Express
$ cd Pasar-Qita-Backend-Express
$ npm install

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

SERVER_PORT=4000


SECRET_KEY = "secret_key"
REQUEST_HEADERS = "request_headers"

CLOUD_NAME ="cloud_name_you"
API_KEY="api_key_cloudinary_you"
API_SECRET="api_secret_cloadinary_you"



```
### Start Development Server
```
$ npm start
```
### trials
```

### Use
#### Register
Method : post
(-) http://localhost/user/register

*Req.body ->
1. email
2. password
3. name
4. telp
5. address
6. photo
7. role_id
8. longitude
9. latitude
* Req.Header ->
1. authorization = semangat-team-faraday

#### Login
Method : post
(-) http://localhost:4000/user/login

*Req.body ->
1. email
2. password

* Req.Header ->
1. authorization = semangat-team-faraday

#### Detail User
Method : get
(-) http://localhost:4000/user/{id_user}

* Req.Header ->
1. authorization = semangat-team-faraday


#### Get All User
Method : get
(-) http://localhost:4000/user/

* Req.Header ->
1. authorization = semangat-team-faraday


#### Delete User
Method : delete
(-) http://localhost:4000/user/1

* Req.Header ->
1. authorization = semangat-team-faraday



