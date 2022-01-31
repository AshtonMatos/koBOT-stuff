const Discord = require("discord.js");

const TOKEN = ("OTM1MTc5MTUzMTg2MTE5NzQx.Ye63dA.yQM4_bXHEq8G03IA32frm0J2qOE");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

/*client.on("messageCreate", (message) => {
    if (message.content == "hi"|| message.content == "hello"){
        message.reply("bruh nawhhhh nah bruhhh nah no way bruhhh fr? Bruhhh")
    }
})*/

var what = "cheese";
var WHAT = "CHEESE";

if (what.localeCompare === WHAT.localeCompare)  {
    console.log ("yes")
}

client.on("messageCreate", (message) => {
    if (message.content == "bruhhh" || message.content ==  "Bruhhh" || message.content == "BRUHHH"){
        message.reply("https://tenor.com/view/bruh-nawh-no-way-fr-gif-22615915")
    }
});

client.on("messageCreate", (message) => {
    if (message.content == ".grb"){
        message.reply("https://cdn.discordapp.com/attachments/708109702977945661/885217071435227166/claus_grb.gif")
    }
});

client.on("messageCreate", (message) => {
    if (message.content == ".grb2"){
        message.reply("https://cdn.discordapp.com/attachments/608635330995945473/738828454799343636/ezgif-7-05c439079cfe.gif")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == ".help"){
        message.reply("https://discord.com/channels/823518760971010069/935189965762089041/935190389701345351")
    }
});

client.on("messageCreate", (message) => {
if (message.content == ".rps"){
    message.reply("Reply with Rock, Paper, or Scissors")

client.on("messageCreate", (message) => {
    if (message.content == "Rock"){
        message.reply("Rockcock")
    }
    })
}
})
client.login(TOKEN);