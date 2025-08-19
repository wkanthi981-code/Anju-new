//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNDa1A0MHc2bmZEU2pnNjI5SXhuK2hsWFkwa20xRW43MWhZRlZVRUExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGVkN0luazltSG95V0t4NTUvTE5ucXZXRllCYURmZ0ZsVDc2SjdMUkwwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQllRaS9NRjllZ2phQXFaVkpTQ2gxSStDYi9zbko0WHhlOGM2QUtjL0VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UE50SWZ0WkRDdVovNWs5b1ptelV2RjFkc1VONmJPemlJZWV1SWp6K0dzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCTlZSQk5KQnE4bndnaTUwUit4YWE3RnJ6U2xLRHpTR1gxeE95OHhyM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1rODEvLzJqMWp0NUczVEhGYkxZQjNVdXlORW1Fam10MDRWaFkvVmdjUVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FOekQzL2ZtN2I3cXpiMU54aXo5LzhicGF1VVhzbVdSanEyKzJodFdHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW5FUVIzZTdsSExzcm0vcFpKUktxejE5VS9iMkxRSm9jZjhiMFZudmtuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5HcU1EWWNDQ283c0o0YldQTU5LWkRIdmF4bk5RazdvWkgzM3B6RDZiL0l4eWVxN2NvbEsrdm5GZHpYYVdLUTNvWUFRaDBKb21xL2dQZ0FuTjl4dUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Ik9xUUZSOTZjRkd5OHp4TmdXUnpFYmZ2UjJTWjVkTXN5Q1ZETVNtcENXTTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVVaXBrMVFfUVBlVTZRRV81MmxUNEEiLCJwaG9uZUlkIjoiYTUxYmQ2ODQtMjBjNC00OWQyLWJjOTYtYjIwZTY3ZjdhZjJkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVsUExKYlR5NXp0d2U5U29kZk96R1h5cVRHVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpodVRFVnVEUHU5dlFKakJiOTRDSjFEMjYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUC8rdTk4RUVOVzNpc1VHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS3Evb1hSNXBtRnBZWk5LSTEwNEcxK2JxSG5Rd3drUVhDMit2Y3pKclRGND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidDhQeFByc1JPTm40WXk3RWk3Q29ONk1SOWVkcjdZVyt4WUhQVWl0ZW5tMlg3MTU0THU4MzNZM3FwU0xWSXB0dmtvQytXeGRGcVMwSHllRHBqQ05oQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhEeGlYTHhQTnh5QlVFVDdvRVlTZ0gyZDBhVC9rSlhSMXc2aktTR1dNa0Q2OG5kQ1hIQzloMUFvSkdOeWVNcXozOXNXYzFPQ0hDTkhPb0Z3Ymxab0RBPT0ifSwibWUiOnsiaWQiOiI5NDc1MDQzMzY1NToyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2NzQwMTMxNjQ3MDkzNDoyNEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTA0MzM2NTU6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3F2NkYwZWFaaGFXR1RTaU5kT0J0Zm02aDUwTU1KRUZ3dHZyM015YTB4ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDg3MTkyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRURGIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0778587324",
  PASSWORD: 
    process.env.PASSWORD || "Esanda2008",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
