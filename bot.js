const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "+";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("you",{type: 'WATCHING'});
  
  });
  
  client.on('message', message => {
    if(message.content == prefix + 'slist') {
             if(!message.author.id === '323885452207587329') return;
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
    
    client.on('message', message => {
    if(message.content == prefix + 'slis') {
             if(!message.author.id === '323885452207587329') return;
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    message.channel.send(`
    **-------------------------**
      Server Name : **${gname}**
      Server MemberCount : **${gmemb} **
      **---------------------------**
            `);
    }) 
    }
    });
    
    
    
    client.login(process.env.BOT_TOKEN);
