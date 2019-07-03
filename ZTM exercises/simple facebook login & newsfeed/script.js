var database = [
	{
		username: "ratiarahman",
		password: "secretpass"
	},
	{
		username: "fatima",
		password: "12345"
	},
	{
		username: "vanya",
		password: "hellyeah"
	},
	{
		username: "jssocool",
		password: "fire"
	},
	{
		username: "vala",
		password: "lalaland"
	}
];

var newsfeed = [
	{
		Name: "Zic",
		Status: "Learning JS!!"	
	},

	{
		Name: "Zac",
		Status: "JS is really so cool!!"
	},

	{
		Name: "Vala",
		Status: "Update your github!!"
	}
];

var userName = prompt("Username");
var passWord = prompt("Password");

function isUserValid(u,p){
	for(var i=0; i<database.length; i++){
		if (u===database[i].username && p===database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass){
	if (isUserValid(user,pass)) {
		document.getElementById("login").innerHTML = newsfeed;
		console.log(newsfeed);
	}
	else{
		alert("Sorry!!");
	}
}

signIn(userName,passWord);