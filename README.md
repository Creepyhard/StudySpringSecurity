# StudySpringSecurity
I'm studying Spring Security and I intend to go into this subject in depth.</br>
This project use oauth2, JWT, Spring Security and Angular. </br>
I'll add Spring Security in my principal project, after improving my skills.</br>

# Code_Challenge
Run PKCEExample and it'll show code_challenge</br>
http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://127.0.0.1:3000/authorized&code_challenge=.&code_challenge_method=S256</br>
Replace a . after "code_challenge=" with the gerenated code</br>

# ResourceServer
Don't forget to run in port=9000 to avoid problems</br>
This project will generated code verifier, place it after "code_verifier="</br>
http://localhost:8080/oauth2/token?client_id=client&redirect_uri=http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=.&code_verifier=YOURCODEVERIFIER

# UsePostman
With Postman, use the requisition Get while the project Spring is running and write localhost:8080/.well-known/openid-configuration, it'll return some datas, such as http://localhost:8080/oauth2/jwks</br>
We're using this requisition to validate JWT in https://jwt.io/ later on, it'll compare your return with return of this site</br>
OBS: In case html return instead of JSON, something's wrong in your code</br>
</br>
Go to http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://127.0.0.1:3000/authorized, it'll return one code, copy it</br>
After copying your code, go to Postman in the requisition Post and write :</br>
http://localhost:8080/oauth2/token?client_id=client&redirect_uri=http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=YOURCODE&code_verifier=YOURCODEVERIFIER</br>
Go to Authorization -> Type -> Basic Auth, write your username and password(client/secret) -> Send </br>
It must return "id_token", verify this token in https://jwt.io/, if it check, open another requisition get localhost:9000/demo and in the Headers write Authorization and on the side write "Bearer YOURIDTOKEN".

# Angular

Create AuthComponent and HomeComponent

`ng g c auth`</br>
`ng g c home`

# Install buffer package for base64 encoding

`npm i buffer`