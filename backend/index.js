const cookieSession = require('cookie-session');
const express = require("express");
const app = express();
const {PORT,CLIENT_URL} = require('./config')
const passport = require('passport');
const passportSetup = require('./passport')
const AuthRoutes = require('./routes/auth');
const cors = require("cors");

app.use(
    cookieSession({
        name:"session",
        keys:["testing"],
        maxAge: 24 * 60 * 60 * 100
    })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(cors({
//     origin:CLIENT_URL,
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true,
// }));

app.use(
    cors({
 origin:function(origin,callback){
 return callback(null,true);
 },
 optionsSuccessStatus:200,
 credentials:true
    })
 );
 
app.use("/auth",AuthRoutes)

app.listen(PORT,()=>{
console.log(`Server is Listening at ${PORT}`);
});