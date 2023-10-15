const cookieSession = require('cookie-session');
const express = require("express");
const app = express();
const {PORT} = require('./config')
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

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))
app.use("/auth",AuthRoutes)

app.listen(PORT,()=>{
console.log(`Server is Listening at ${PORT}`);
});