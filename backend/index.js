const cookieSession = require('cookie-session');
const express = require("express");
const app = express();
const PORT = 5000
const passport = require('passport');
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


app.listen(PORT,()=>{
console.log(`Server is Listening at ${PORT}`);
});