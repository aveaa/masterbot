exports.run = (client, message, Discord, prefix) => {


      const List = message.guild.emojis.map(e => e.toString()).join(" ");
      let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      let day = message.guild.createdAt.getDate()
      let month = 1 + message.guild.createdAt.getMonth()
      let year = message.guild.createdAt.getFullYear()
       let sicon = message.guild.iconURL;
       let serverembed = new Discord.RichEmbed()
       .setAuthor(message.guild.name, sicon)
       .setFooter(`Server Created : Day:${day} • Month:${month} • Year:${year}`)
       .setColor('RANDOM')
       .setThumbnail(sicon)
       .addField("ServerName", message.guild.name, true)
       .addField("OWNER", message.guild.owner.user.tag, true)
       .addField("Region", message.guild.region, true)
       .addField("Channels", message.guild.channels.size, true)
       .addField("MEMBER", message.guild.memberCount, true)
       .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
       .addField("BOT", message.guild.members.filter(m => m.user.bot).size, true)
       .addField("Online", online.size, true)
     //  .setImage("https://cdn.discordapp.com/attachments/443665749656207360/445222446719827968/ServerInfo_-_Mirai.png")
       .addField("Created At", message.member.joinedAt, true)
       .setDescription("ServerEmoji\n"+List+"")

       message.channel.send(serverembed);
    
    


}
