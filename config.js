const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hunterpasha456@gmail.com"
global.location="lahor,pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/usmanneo";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.website=process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/30230e94c9a6c1894f190.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923034088220" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923034088220";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/30230e94c9a6c1894f190.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254748387615,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254748387615,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://keith-app-session-6d1313c4f8e5.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "Usman_MD", /**  Available @MENU @Schemes 1: Usman_Md, 2: A17_Md, 3: Usman-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Usman" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Usman²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • H4k3r Tools』*\n youtube.com/@H4K3RTools"),
 
  author : process.env.PACK_AUTHER|| "Usman",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || "Usman-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "It'x Usman",

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ViaUs4eUh0UXo3Qjd3dmNJSFdsYldWY085TjZva04veU9lWWYvcmZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1UrQWFDbUdzYjhjUUhqU2pUQ1ZVZFprQlFVRWpERVJHZXJpRGQyM3gycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTldkekl6dVdxOW11ZzAwaU5qbTZJOUdyWTNEWmFpTTdTVGQ1bDlQaTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNOUlTVDUxNkdMOVNSRDh5bEQxRXZ1TkZNcGhXV3BoUGtqd044ZGlyclM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFOHhLaWwzd2N3cE5QLy91eDVSR3g3NERXZ2tGekZTbDZ2NnB0YjRFMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ZazVEK1ZYQmQyRVN0dWFvMHpVYWVkcW1oWXdQS0hCVnl3VGNBdXc1a3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hsZldmdy9RdDhaVmNrblJWRXpxaU1FRXpVR01wVm1OU2M5NEc2V1ltWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWhuS3Jrc2NKMWh6dWF5SHdxSEc0czVJcmpUWjl2SUtobmRDVW1LSUpIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx1Snl3VnBmc28wNVJ0UFoyYlJnSzlxTzAxTEVDM0JlKzRObEhCbFJ4dmZnSk1EZmdHeU5xNUlzOGpzeStXMXNIOThMcFN3ejBOb2tTVTQ5TFdGSmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJvZmpodXpLV090Z1U2cWZQZVpaWVFCM0w3RHplNWxSQkVCdkg4cGhjOGlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYxNDg1OTc1NDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5MTEwMjQyQjVBRjBFQTU0OTQyRjYyNUY1MjZEOTQ0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxNzk4MDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpCLWYwS3ppUndHckNfY1d4UGdYOEEiLCJwaG9uZUlkIjoiYThiNDkwZjItOTdjZi00OGFlLTk1OGItODY4MTFlOWVhNjNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhFWTAvaUJ5aFhMcVUrWU5LRGR3eXRoNEhpND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdGJxT3BRcEw5UFQ0SVYzVWN6UjJ5L1VWZDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1IzMzhEQ0MiLCJtZSI6eyJpZCI6IjYxNDg1OTc1NDExOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFuZHJldyBUYXRhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUEd3NEFIRUl1cjZMSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGMzlocXY2akFCSFFHSitKMHNHR1ZLbjdjTVg4RXp0MHRkV1A0TDBSSzJJPSIsImFjY291bnRTaWduYXR1cmUiOiIzZzhtOEFsOXFFcHF4WUhVaFlya2RVelR0dmp1SHFnaUZnR1RqQllGNVhWUGJTSkpBcTVST29YMk9xSWIyUDJJOXk1dVV6bTZQWFgwSjhpaG05b2FDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRTUvQ3pqUTZXa2ZkU3pid2xuNG5yUno4S3NRN3BzWW51NFhoY3lyMWxMaXh3TndMMHV0NjQ0VGY3ZDFLdVlkRFRqN3U1TDFBd1dTZTFTNllOOVNkanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MTQ4NTk3NTQxMToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSZC9ZYXIrb3dBUjBCaWZpZExCaGxTcCszREYvQk03ZExYVmorQzlFU3RpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3MTc5Nzk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg3byJ9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "2GBv7MBGs7NossXTnN1rsvvX",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
