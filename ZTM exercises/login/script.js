var database = [
	{
		username: "ratiarahman",
		password: "secretpass"
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

function signIn(user, pass){
	if (user === database[0].username && pass === database[0].password) {
		// document.getElementById("login").innerHTML = newsfeed;
		console.log(newsfeed);
	}
	else{
		alert("Sorry!!");
	}
}

signIn(userName,passWord);