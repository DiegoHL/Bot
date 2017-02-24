const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});


bot.on('message', (message) => {
    if(message.content == 'ping'){
        message.channel.sendMessage('pong');
    }
});


bot.login('Mjg0NDMxODYyMTI4OTY3Njgw.C5DhWQ.ueHi-d2e3GpoLApcIMbswfDzAy8');