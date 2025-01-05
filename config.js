const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "F783RBDY#dWGUnPbgVx6tCR3Do8vzdwOk58E3fGGtsFQUMfrBLTI",
MONGODB: process.env.MONGODB || "mongodb://mongo:UulqRzbarHKPlTmjsXTUnyCBstadpehV@junction.proxy.rlwy.net:59009",




BOT_NUMBER: process.env.BOT_NUMBER || "94704932651",

};
