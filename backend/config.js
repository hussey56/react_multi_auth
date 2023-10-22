const dotenv = require('dotenv').config();
const PORT = process.env.PORT
const GOOGLE_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CLIENT_URL = process.env.CLIENT_URL;
module.exports = {
PORT,
GOOGLE_ID,
GOOGLE_CLIENT_SECRET,
GITHUB_CLIENT_ID,
GITHUB_CLIENT_SECRET,
CLIENT_URL
}