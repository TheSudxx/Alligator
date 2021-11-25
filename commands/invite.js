const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite Me",
        "https://img.icons8.com/ultraviolet/2x/email-open--v2.gif"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`[CLICK HERE TO INVITE ME](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36752384&scope=bot)`,true)
      
  );
};