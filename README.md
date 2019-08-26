# Pasar-Qita-Backend-Express
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
7. longitude
8. latitude
* Req.Header ->
1. authorization = semangat-team-faraday

#### Login
Method : post
(-) http://localhost/user/login

*Req.body ->
1. email
2. password

* Req.Header ->
1. authorization = semangat-team-faraday

### Detail User
Method : get
(-) http://localhost/user/{id_user}

* Req.Header ->
1. authorization = semangat-team-faraday


### Get All User
Method : get
(-) http://localhost/user/

* Req.Header ->
1. authorization = semangat-team-faraday



