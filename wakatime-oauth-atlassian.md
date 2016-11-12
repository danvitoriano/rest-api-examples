# bitbucket authorize from wakatime url setting token into a cookie

Request *GET* https://wakatime.com/integrations/bitbucket

Response *302* : redirect to wakatime oauth authorize API for bitbucket integrations

Response *Location:* https://wakatime.com/oauth/bitbucket/authorize?reason=history&next=%2Fintegrations%2Fbitbucket

Request *GET*

Request *Query String Parameters:*

	reason:history

	next:/integrations/bitbucket

Response *302* : redirect to bitbucket oauth2 authorize API response type code

Response *Location:* https://bitbucket.org/site/oauth2/authorize?response_type=code&state=%7B%22c%22%3A+%223015fd6529ba793b6d5a936ba63530f0148327e7%22%2C+%22n%22%3A+%22%2Fintegrations%2Fbitbucket%22%7D&redirect_uri=https%3A%2F%2Fwakatime.com%2Foauth%2Fbitbucket%2Fcallback&client_id=rf6UEEH5jgDMfY568D

Request *GET*

Request *Query String Parameters:*

	response_type:code

	state:{"c": "3015fd6529ba793b6d5a936ba63530f0148327e7", "n": "/integrations/bitbucket"}

	redirect_uri:https://wakatime.com/oauth/bitbucket/callback

	client_id:rf6UEEH5jgDMfY568D

Response *302* : redirect to bitbucket signin screen 

Response *location:* location:https://bitbucket.org/account/signin/?next=/site/oauth2/authorize%3Fresponse_type%3Dcode%26state%3D%257B%2522c%2522%253A%2B%25223015fd6529ba793b6d5a936ba63530f0148327e7%2522%252C%2B%2522n%2522%253A%2B%2522%252Fintegrations%252Fbitbucket%2522%257D%26redirect_uri%3Dhttps%253A%252F%252Fwakatime.com%252Foauth%252Fbitbucket%252Fcallback%26client_id%3Drf6UEEH5jgDMfY568D 

Request *GET*

Request *Query String Parameters:*

next:/site/oauth2/authorize?response_type=code&state=%7B%22c%22%3A+%223015fd6529ba793b6d5a936ba63530f0148327e7%22%2C+%22n%22%3A+%22%2Fintegrations%2Fbitbucket%22%7D&redirect_uri=https%3A%2F%2Fwakatime.com%2Foauth%2Fbitbucket%2Fcallback&client_id=rf6UEEH5jgDMfY568D

Response *200* : set cookie with token

set-cookie:

csrftoken=zLJZi91be6y8BHx1zaaiFEsKkPShd7a7; 

expires=Sat, 11-Nov-2017 20:03:44 GMT; 

Max-Age=31449600; 

Path=/; 

secure

**USER INPUTS BITBUCKET LOGIN CREDENTIALS (E-MAIL, PASSWORD)**

Request *POST* https://bitbucket.org/account/signin/

content-type:application/x-www-form-urlencoded

Request *Query String Parameters:*

next:/site/oauth2/authorize?response_type=code&state=%7B%22c%22%3A+%223015fd6529ba793b6d5a936ba63530f0148327e7%22%2C+%22n%22%3A+%22%2Fintegrations%2Fbitbucket%22%7D&redirect_uri=https%3A%2F%2Fwakatime.com%2Foauth%2Fbitbucket%2Fcallback&client_id=rf6UEEH5jgDMfY568D

csrfmiddlewaretoken:zLJZi91be6y8BHx1zaaiFEsKkPShd7a7

username:vitoriano08@gmail.com

password:Jede@080

*source code*
xt=%2Fsite%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26state%3D%257B%2522c%2522%253A%2B%25223015fd6529ba793b6d5a936ba63530f0148327e7%2522%252C%2B%2522n%2522%253A%2B%2522%252Fintegrations%252Fbitbucket%2522%257D%26redirect_uri%3Dhttps%253A%252F%252Fwakatime.com%252Foauth%252Fbitbucket%252Fcallback%26client_id%3Drf6UEEH5jgDMfY568D&csrfmiddlewaretoken=zLJZi91be6y8BHx1zaaiFEsKkPShd7a7&username=vitoriano08%40gmail.com&password=Jede%40080

Response *302* : if user, pass and token redirects 

Response *location:* https://bitbucket.org/site/oauth2/authorize?response_type=code&state=%7B%22c%22%3A+%223015fd6529ba793b6d5a936ba63530f0148327e7%22%2C+%22n%22%3A+%22%2Fintegrations%2Fbitbucket%22%7D&redirect_uri=https%3A%2F%2Fwakatime.com%2Foauth%2Fbitbucket%2Fcallback&client_id=rf6UEEH5jgDMfY568D

Request *GET*

Request *Query String Parameters:*

	response_type:code

	state:{"c": "3015fd6529ba793b6d5a936ba63530f0148327e7", "n": "/integrations/bitbucket"}
	
	redirect_uri:https://wakatime.com/oauth/bitbucket/callback
	
	client_id:rf6UEEH5jgDMfY568D

**USER CLICK THE AUTH BUTTON TO ALLOWS WAKATIME APP ACCESS**

Request *POST*

Request *Query String Parameters:*

response_type:code

state:{"c": "3015fd6529ba793b6d5a936ba63530f0148327e7", "n": "/integrations/bitbucket"}

redirect_uri:https://wakatime.com/oauth/bitbucket/callback

client_id:rf6UEEH5jgDMfY568D

Request *Form Data:*

action:approve

state:{"c": "3015fd6529ba793b6d5a936ba63530f0148327e7", "n": "/integrations/bitbucket"}

client_id:rf6UEEH5jgDMfY568D

redirect_uri:https://wakatime.com/oauth/bitbucket/callback

response_type:code

csrfmiddlewaretoken:VfJQQmGenG7hakX0Tpr6oJu6lQgZYXrG

Response *302* : redirects to wakatime oauth bitbucket callback URL with code

Response *location:* https://wakatime.com/oauth/bitbucket/callback?state=%7B%22c%22%3A+%223015fd6529ba793b6d5a936ba63530f0148327e7%22%2C+%22n%22%3A+%22%2Fintegrations%2Fbitbucket%22%7D&code=MwJQFz3tCxmSFqLudD

Request *GET*

Request *Query String Parameters:*

state:{"c": "3015fd6529ba793b6d5a936ba63530f0148327e7", "n": "/integrations/bitbucket"}

code:MwJQFz3tCxmSFqLudD

Response *302*

Set-Cookie:
csrftoken=3015fd6529ba793b6d5a936ba63530f0148327e7; 
Expires=Sat, 19-Nov-2016 20:58:59 GMT; 
Max-Age=604800; 
Secure; 
Path=/

Response *Location:* https://wakatime.com/integrations/bitbucket

Request *GET*

Response *200*

**USER IS BACK FROM START, WITH csrftoken STORED INTO A COOKIE**