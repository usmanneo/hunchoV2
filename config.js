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

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhTNmpJSmZrYUN2WmgxWUZlYlFHMFBoMDVDK011UWdaNUFxQUJLRHZWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWtnYWRta1ZGVkFxTTVuWE8zdGF4WHBDWUFPandXWFRaRmxGeU5ZYnBrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR1p4N3hETG12dSt1THpzWnoraC9KTTlJdFE5M1RCK2RvQWkyZlZva1hZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrN3RtU09FRFBjTUU2UGdGUkFuQ3VxSFNsS3VXZnEvdm5reUFGWGZUSUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1EYXRiSitWT09HR3NQYXA4UnVZb1hKdHFvU0Y4QTdFRlovYkNBZ1RYMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRTNWdVNlFvVDJJdm10OHRNbG1mcXdmRm1NRERyVHMzYlhYUExGeHFoQnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tRbDBPVXFja2R0U25pVDlxbzIwZlI0WG8vUEdjS0EydGRPYnVKUFEycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3VINzVZRjRVR1p2d0psT1cvekVnZDVSUTRPcjREckpJbVNDL1RvK0F5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRKVVQzcXVYZ1o1RjZzbGIwU1cxMnArQXF3WTkrbExqVjI4VCtSOXN3ZStPVEJTV2ZHcy9XZVlWN2JMdFRsTU1Cdm1tNWdJUFVQYkdSMmFqM3c5OERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IngxcENNenlqcUM0WVpMQ2c2TFVTNzZzaWxOR3J0MC8zZHlpcDZkVE0xLzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNjE0ODU5NzU0MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzJDQUE3RjM2QjAxNkJFOTAwNzU2QzcwNjNFQUY4NDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzE3ODY4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjE0ODU5NzU0MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0EwMTc5RDM0NDk5NTY0QTU1ODNDMkUzRjlBOTNGNUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzE3ODY4NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOXhNZ1RyM21RaU9uem83TFBQQ1lndyIsInBob25lSWQiOiJkZjRjYWM1Ny0zNDZmLTRkYjAtYWQ4ZS0yNWEzNzMwYzdiYjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1ByTnhjU3RnaHNxb0xQdFEvZWZEVzdTNldvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFdUUvYUxCVTVETmV3cy9QZmVHaWtGOW52MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYU1k4REY2RCIsIm1lIjp7ImlkIjoiNjE0ODU5NzU0MTE6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmV3IFRhdGEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMR3c0QUhFSzJpNkxJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYzOWhxdjZqQUJIUUdKK0owc0dHVktuN2NNWDhFenQwdGRXUDRMMFJLMkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZ2Z3BHUkxXWjdpbkxhZFVDR3Y3WGxBcElDTFFvTmViamoxeVpNNnVZdjRRRVB2a2NwSi9vOHlzdTN6WVp4S3AxSmJxQ3I3MCtJeUdSQUFEa01qYUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0UU82ZG9PbFNRYitNcHRJeC9TRGZRNFVnb1U5RncwcjBNS3d0Ykl3Ri9DVmh6ckJ0ZzVtQnBONnM5WDVCQ0JXWWo2T21hUDJ6R2VtSFpqUnlneTJBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYxNDg1OTc1NDExOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJkL1lhcitvd0FSMEJpZmlkTEJobFNwKzNERi9CTTdkTFhWaitDOUVTdGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTcxNzg2ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDdvIn0=",  // PUT SESSION ID HERE 
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
 
