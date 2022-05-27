var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// configure logger settings

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console,{

    colorize: true
});

logger.lever = 'debug';

// Initialize Discord bot 

var bot = new Discord.Client({

    token: auth.token,

    autorun:true
});

bot.on('ready', function (evt) {

    logger.info('Connected');
    
    logger.info('Logged in as: ');
    
    logger.info(bot.username + ' - (' + bot.id + ')');
    });

    bot.on('message',function (user,userID,channelID,message,evt){


        //bot harus tau kalo kita mau execute a command
        // bot denger kalo pesan start with '!'

        if (message.substring(0, 1) == '#'){
            var args = message.substring(1).split('');
            var cmd = args[0];
            args = args.splice(1);

            switch(cmd) {
             // #ping

        case 'p':

            bot.sendMessage({

                to: channelID,

                message: 'Pong!'

            });

                    break;

                    // add command!
            }
        }
    });