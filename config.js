const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254754263048";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254754263048";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_05_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkFwZnpWM3R2MTdzNk8yWkJLZ242QUVxaW42YzlhVC80ekdBaUlYU3ZRbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGJlRW1NNnhTVjJFVUZTOXRHaEE4d1wiLFxuICBcInBob25lSWRcIjogXCIzOTdkMjZiZi05NGZmLTQ2YTAtODc4My00YzU5YzJmNmIxZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxOTAsXG4gICAgICA5MSxcbiAgICAgIDE5NyxcbiAgICAgIDYzLFxuICAgICAgNSxcbiAgICAgIDEzOCxcbiAgICAgIDUxLFxuICAgICAgMzIsXG4gICAgICAxODUsXG4gICAgICAxMDAsXG4gICAgICAxNzksXG4gICAgICAyNyxcbiAgICAgIDEyOCxcbiAgICAgIDIzNSxcbiAgICAgIDE4OCxcbiAgICAgIDkwLFxuICAgICAgMTE3LFxuICAgICAgMTgsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDI0LFxuICAgICAgMTE3LFxuICAgICAgNTcsXG4gICAgICAxMixcbiAgICAgIDIsXG4gICAgICAyNDAsXG4gICAgICAyMjQsXG4gICAgICAxNjUsXG4gICAgICA2MyxcbiAgICAgIDExMixcbiAgICAgIDIwNyxcbiAgICAgIDMwLFxuICAgICAgMjksXG4gICAgICAxMDIsXG4gICAgICA1NyxcbiAgICAgIDY2LFxuICAgICAgMjE5LFxuICAgICAgMTE0LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZFMTZTN05GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTQyNjMwNDg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2NzIzMTY5ODg2MzE4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJpbTZFSEVPL1lwTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyTURna2l1bmNyYlp0aE05WFJ3U2ZxMXQ2di9zTlJLMjBxYVNSUFU0V0gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlppTERMSCt0K0h4eHM3aEZtcmg5RTBZQlpRM05pN1VMR2YrSU53T041QVFzZU9wMmFpYitQWEhDVEdITElZNVlsRkpBZnpBdUpDbXQvWENNSXhsTkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxQemUyWFpEazUra3ZUV0hyTFpuT1V3VVdrSlczWE9qZFNVZ2luQ1d4SXlsUURRaDNJb2ZkL2hja1JsbGlvU2N4c1FSbE4ybGZEQWFvWHREblB6dWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NDI2MzA0ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODE2ODY5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Bryson",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
