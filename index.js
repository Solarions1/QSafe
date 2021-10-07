'use strict'

const express = require('express');
const passport = require('passport');
const cookieParser = require('cookieparser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;


const app = express();
const port = 7000;

/*app.use(express.urlencoded({ extended: true}));

//app.use(cookieparser('Mi secreto'));
app.use(session({
	secret: 'Mi secreto',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal(function (username, password, done){

	if(username==="manu" && password==="12345")
		return done(null, {id:1, name: 'Manuel'});

	done(null, false)
}));
passport.serializeUser(function (user, done) {
	done(null, user.id);
	
});

passport.deserializeUser(function(id, done){
	done(null, {id: 1, name: "Manuel"});
});


app.set('view engine', 'ejs');

app.get('/test', (req,res)=>{
	res.render('homepage');
});

app.get("/login", (req, res)=>{
	res.render("login");
});

app.post("/login", passport.use(function(username, password, done){
	successRedirect: "/"
}));*/














app.get("login",(req,res)=>{
	res.render("login");
});
app.use(express.static('public'));

app.listen(port, ()=>{ 
	console.log('Server running on port '+ port);
}); 