const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
const commands = `__**connect**__💫 - **join the voice channel you are in**
__**disconnect**__💫 - **leave the voice channel you are in**
__**play**__💫 - **play songs from youtube**
__**pause**__💫 - **pause currently playing songs in the server**
__**resume**__💫 - **resume paused songs in the server**
__**queue**__💫 - **shows the song queue of the server**
__**skip**__💫 - **skips to next song in the queue**
__**skipto**__💫 - **Multiple skips until target**
__**stop**__💫 - **stops the song and clears the queue**
__**volume**__💫 - **see or adjust volume of songs**
__**np**__💫 - **see now playing song**
__**lyrics**__💫 - **get lyrics of current song**
__**shuffle**__💫 - **shuffle and randomize the queue**
__**invite**__💫 - **get invite link for the bot**
__**loop**__💫 - **enable / disable loop for the currently playing song**
__**remove**__💫 - **remove a song from the queue**
__**help**__💫 - **to see this command**`;

const revised = commands
.split("\n")
.map((x) => "• " + "𒆕" + client.config.prefix + x.trim())
.join("\n");

message.channel.send(
new MessageEmbed()
.setAuthor(
"MusicBot Commands Help",
"https://img.icons8.com/color/2x/services--v2.gif"
)
.setColor("FFFBFB")
.setTimestamp()
.setDescription(revised)
);
};