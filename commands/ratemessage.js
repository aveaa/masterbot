const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix, args) => {

message.delete();

   let ratings = ["0", "⭐ 1", "⭐⭐ 2", "⭐⭐⭐ 3", "⭐⭐⭐⭐ 4", "⭐⭐⭐⭐⭐ 5", "⭐⭐⭐⭐⭐⭐ 6",  "⭐⭐⭐⭐⭐⭐⭐ 7", "⭐⭐⭐⭐⭐⭐⭐⭐ 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10"];

    let result = Math.floor((Math.random() * ratings.length));
    let user = message.mentions.users.first();
 
    let Embed = new Discord.RichEmbed()
 
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .addField("Answer :", args[0])
    .addField("Rating :", ratings[result]);
 
 send(message.channel, Embed, {
  name: "TAMOTOJI Rateing",
  icon: 'https://cdn.discordapp.com/attachments/444786595355426816/462609909075410944/images.png'
 });
  

}
