const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

const opus = require('node-opus');
const ytdl = require('ytdl-core')

var prefix = "*";

bot.on('ready', () => {
	bot.user.setActivity(bot.guilds.size + 50 + ' servers', { type: 'WATCHING' });
	bot.user.setUsername("⚡Rainbow+");
	
});


//EMOJIS
const knuckles = bot.emojis.get("432968588383748116");
const lolidragon = bot.emojis.get("433289550375419904");
const dab = bot.emojis.get("432915228947120129");

const guild = bot.guilds.get(bot.guilds.id);


bot.login(process.env.TOKEN);

bot.on('message', message => {
	
    if(message.author.bot) return;
	
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

//SONDAGE
    if (msg.startsWith(prefix + "poll")) {
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embedPoll = new Discord.RichEmbed()
            .setTitle("POLL")
	    .setDescription(message.author + " ask")
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Reply with :white_check_mark: or :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embedPoll)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

//SERV INFO
    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
		.setThumbnail(message.guild.iconURL)
		.setTitle("INFO")
		.setDescription("Server Info")
		.addField("Name", message.guild.name)
		.addField("Members", message.guild.memberCount)
		.setColor("0xF4D03F")
		.setFooter("BOT CREATED BY FURBAKA")
        message.channel.sendEmbed(embed);
    

    }
//AVATAR
    if (message.content == prefix + "avatar") {
     // Send the user's avatar URL
	         var embedavatar = new Discord.RichEmbed()
		.setThumbnail(message.guild.iconURL)
		.setTitle("INFO")
		.setDescription("Server Info")
		.addImage(message.author.avatarURL)
		.addField("Members", message.guild.memberCount)
		.setColor("0xF4D03F")
		.setFooter(message.author.name, message.author.avatarURL)
        message.channel.sendEmbed(embed);
    }
//WAE
    if (message.content.includes(" WAE") || message.content.includes(" wae")){
	var knuckles = bot.emojis.get("432968588383748116");
	var lolidragon = bot.emojis.get("433289550375419904");
	var dab = bot.emojis.get("432915228947120129");
           var sayings = [`FOLLOW ME MA BRUDDAH I KNOW DA WAE !\n ${knuckles}${knuckles}${knuckles}`,
		   `COME ON MY BRUDAH WE WILL MAKE AN ARMY !\n ${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}`,
		   `DO YOU KNOW DA WAE ! ${knuckles}`,
		   `WER IS DA WAE ? ${knuckles}`,
		   `WER IS DA QUEEN ? ${knuckles}`,
		   `THERE IS DA QUEEN !\n${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${lolidragon}`];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result], true);
    }
//CREEPY
    if (message.content == prefix + "creepy") {
    	var sayings = ["Mon père m'a souvent mis en garde contre les sosies avant de mourir. Je l'ai vu traverser la rue avec moi.",
										"Mon père est tombé dans le puits. Je n'étais pas inquiet jusqu'à ce que j'entende des craquements d'os au fond.",
										"Ce n'était pas à cause du virus que les gens ont commencé à s'entre-dévorer. C'était à cause du goût.",
		       								"Elle a le coeur sur la main, mais sa cervelle est répandue sur les murs.",
										"<<Ton ami imaginaire n'est pas réel.>> Quand tu l'as accepté, j'ai commencé à disparaître",
		       								"Avis à la femme qui n'arrête pas de frapper à ma porte la nuit : Je ne te laisserai pas sortir.",
										"Mes étudiants m'aiment de tout leur cœur. J'aimerais juste qu'ils ne laissent pas de trace.",
		       								"<<Maman ! Maman ! Ma poupée parle !>> <<Je sais, ma chérie.>> La voix de Maman venait de la poupée.",
										"Quelques heures après avoir été enterré vivant, j'ai été soulagé en entendant quelqu'un creuser. Ma joie est vite retombée quand j'ai réalisé que le son venait d'en dessous.",
										"Remettez les miroirs. Vous regarder nous manque.",
										"La nuit dernière, j'ai été réveillé par les pleurs d'un enfant. J'ai descendu les escaliers et j'ai fourré un bâillon dans sa bouche.",
										"Saviez-vous que vous connaissez tous les visages rencontrés durant vos rêves et qu'il est impossible d'en inventer ? Rappelez-vous des créatures et démons de vos cauchemars."];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage("```fix\n" + sayings[result]+ "\n```");
    }
	
//NUM NUM TEXT
    if (message.content.includes("num") || message.content.includes("NUM")) {
    	var sayings = ["num",
										"num num~",
										"num num num <3",
		       								"num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num num",
										"NUM~ ! <3",
		      								"num~ ! <3",
		      								"num~",
		      								"num <3",
		      								"num num <3",
		      								"num ! <3",
		      								"num !"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.author.sendMessage(sayings[result]);
    }
//BLAGUE
    if (message.content == prefix + "blague") {
	    
	message.delete();
	    
    	var sayings = ["Un homme et un chien sont sur une barque le chien pète, l'homme tombe à l'eau et se noit. Quelle est la race du chien?\n**Un pékinois**",
										"Tu as 2 poussin t'en veux 1 bas t'en **POUSSIN**",
										"Qu'est ce qui est jaune est qui attend ?\n**Jonathan**",
		       								"Quelle est la plus intelligente, la blonde, la rousse ou la brune ?\n**La rousse** parce que c’est un dictionnaire.",
										"Un fils demande à son père :\n- Papa,c'est quoi la beauté?\n- Tu vois ta mère ?\n- Oui\n- Et ben c'est pas ça!",
		       								"Un monsieur visite un musée. Soudain il s'arrête et dit au guide :\n- Ah, c'est moche !\n- C'est du Picasso, répond le guide.\nPlus loin, il s'écrie de nouveau :\n- Ah, c'est vraiment moche !\n- Ca Monsieur, c'est un miroir !",
										"Un jour Dieu dit à Casto de ramer.\nEt depuis, **Castorama**...",
		       								"2 arabes sont devant une porte, qui sonne ?\nL'alarme.",
										"Qui a creusé le grand canyon ?\nUn juif qui a perdu 20 centimes.",
										"Que dit-on a un arabe en costard cravate ?\n- Accusé levez-vous.",
		       								"Qu'est-ce qu'un arabe à la mer ? \nLa pollution\n\nQu'est-ce que tous les arabes à la mer ?\nLa sollution",
		       								"Un juif va dans une pizzeria le pizzaiolo lui demande \"Votre pizza vous la préférez cuite au feu de bois ou au gaz ?\"",
		       								"Les juifs , c'est comme le chaussures y'en a plus en 39 qu'en 45",
		       								"Pourquoi les petits chinois ne croient-ils pas au Père Noël ?\nParce que ce sont eux qui fabriquent les jouets !",
										"Quel est le sport préféré des Anglais ?\nLe football.\n\nQuel est le sport préféré des Australiens ?\nLe rugby.\n\nQuel est le sport préféré des Français ?\nLa pétanque.\n\nQuel est le sport préféré des Arabes ?\nTous les sports hippiques.\n**Hippique** tout..."];
            var result = Math.floor((Math.random() * sayings.length) + 0);
            
            var embedX = new Discord.RichEmbed()
            .setThumbnail(bot.user.avatarURL)
            .setTitle("😂")
            .setDescription("Blague pour " + message.author)
            .addField("Blague", sayings[result], true)
            .setColor("0xF4D14F")
	    .setTimestamp();
    
            message.channel.sendEmbed(embedX);
    }
//SUPPR
    if (msg.startsWith(prefix + 'SUPPR')) {

        async function purge() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }

            if (isNaN(args[0])) {

                message.channel.send("Merci d'utiliser un nombre !\n ```\n " + prefix + "suppr <nombre de messages à supprimer>\n```");
		    return;
	        }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + " messages found, deleting...");

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erreur: ${error}`));

        }

        purge();

    }
//AIDE
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("FUN", "`*garfield` (Get Random Garfield's Comic)\n`*creepy` | `*blague`")
		.addField("UTILES", "`*info` (Check Server's Info)\n`*avatar` (Get Your PP)\n`*help` (huh... for the help you know.)\n`*news` (pour voir mes nouveautées)\n`*sondage <question>` (pour faire un sondage)")
		.addField("JEUX", "\`*multi` (Send invite for play to other players)")
		.addField("PLUS", "`*help nsfw` For bad guys~ (**Only in nsfw channel**)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CREATED BY FURBAKA")
        message.channel.sendEmbed(embed2);
    }
    

//RECHERCHE JOUEURS
    if (msg.startsWith(prefix + "MULTI")) {
	
	
	
	    var multi = bot.emojis.get("434047602602803200");
	    var multi = bot.emojis.get("434047602602803200");
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("RECHERCHE DE JOUEURS")
	    .setDescription("Recherche par "+ message.author)
	    .setThumbnail("https://images.emojiterra.com/emojione/v2/128px/1f579.png")
            .addField(`Joue à ` + thingToEcho + ` `, `Réagissez avec ${multi} si vous êtes intéressé(e)`, false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react(multi);
     });
	 }
	 
//CHAT

   //  if (msg.startsWith(prefix + "CHAT")) {
              //message.delete();

              //var options = {
                //method: "GET",
                //url: `http://aws.random.cat/meow`,
              //};
            //  
          //    request.get(options, (error, response, body) => {
        //            var file = JSON.parse(body);
          //          message.channel.sendFile(file.file);
      //        });
	// }
	
//BADWORDS
	if (message.content.includes("TG") || message.content.includes("FTG") || message.content.includes("NTM") || message.content.includes("FDP") || message.content.includes("PUTE") || message.content.includes("SALOPE") || message.content.includes("CONNARD") || message.content.includes("SALOP") || message.content.includes("PUTAIN") || message.content.includes("TA GUEULE") || message.content.includes("BITE") || message.content.includes("CUL") || message.content.includes("tg") || message.content.includes("ftg") || message.content.includes("ntm") || message.content.includes("fdp") || message.content.includes("pute") || message.content.includes("salope") || message.content.includes("connard") || message.content.includes("salop") || message.content.includes("putain") || message.content.includes("ta gueule") || message.content.includes("bite") || message.content.includes("cul")){
        	if (message.channel.nsfw === false) {
		message.react(bot.emojis.get("433316429044121601"));
	}
	}
//AIDE NSFW
    if (message.content === prefix + "aide nsfw"){
	if (message.channel.nsfw === false) {
	return;}
	    
        var embed6 = new Discord.RichEmbed()
		.setThumbnail("http://holly.paheal.net/_images/10f3ed7efc2c3e737b34d755870197b4/2554566%20-%20ELZZombie%20Friendship_is_Magic%20My_Little_Pony%20Rainbow_Dash.png")
		.setTitle("POUR LES COCHONS 🐷")
		.setDescription("Vous allez jouir 💦")
		.addField("Commandes :", "`*nsfw neko` pour avoir des images de petites chattes 😻")
		.setColor("cc55ee")
        message.channel.sendEmbed(embed6);
    }

	
//NSFW NEKO

    if (message.content == prefix + "nsfw neko") {
	    
	  
	    
	message.delete();
	
	if (message.channel.nsfw === false) {
		return;}
	   
    	var image = ["http://metbuat.info/imgs/33db34b34c1420befa0537413d9d27bf.jpg",
			"https://i.redditmedia.com/Zy0aR4AjdHUoNYFuEo2FKbwxKtRZsuLyB_ZZlULWK4w.jpg?w=543&s=5cba179b12aaf08dab9e97256bd9dc2e",
			"http://besthentaipics.com/plog-content/images/best-hentai-pictures/hentai-babes/animal-ears-hentai-cat-girl-neko-nude-butt-breasts-tits-anime-hentai.jpg",
			"https://i.pinimg.com/originals/3f/fa/b9/3ffab95e2b01f6b4c76da3f43a3ca4d7.jpg",
			"https://pbs.twimg.com/media/BVXoUzfCcAIOBV0.jpg",
			"https://78.media.tumblr.com/4b529686cefb03172ac811b1599a6820/tumblr_otdcscDWFP1wufel2o1_1280.jpg",
			"https://78.media.tumblr.com/1e360f38949320c356034f713c538db7/tumblr_ot58zvxbQ61wufel2o1_1280.jpg",
			"https://78.media.tumblr.com/366dbdf0bbb657d058f3544216f5233e/tumblr_ot5125EYlb1wufel2o1_500.jpg",
			"https://78.media.tumblr.com/935b597ed9602b8df271afbb0c1c824a/tumblr_ot50i07dwj1wufel2o1_1280.jpg",
		        "https://i.pinimg.com/originals/52/b7/f0/52b7f01566af91c777c6978b00baac47.jpg",
			"http://www.koakuma.com.mx/wp-content/uploads/2017/07/ch1.jpg",
			"https://pm1.narvii.com/6146/da74f23110ff8e73dff1f67fdc05ca3980cabe8f_hq.jpg",
			"https://i.pinimg.com/originals/a1/a5/86/a1a58684fbcd928c62fd86e3cfbb8930.jpg",
			"https://pm1.narvii.com/6146/8be3160033d147af98a8e585ad103b679b42a4df_hq.jpg",
			"https://i.pinimg.com/originals/b6/e3/3d/b6e33d65ab445b328b6a6370ee6899d5.jpg",
			"https://i.pinimg.com/originals/08/19/8b/08198bb619e8a189c4b8c5ac960b4c0b.jpg",
			"https://i.pinimg.com/originals/f3/1e/36/f31e366a4e3866b623c4b3a9be5394b9.jpg",
			"https://78.media.tumblr.com/aa805ec86b74ff1fab5725a38bd674b4/tumblr_ot49n6DWku1wufel2o1_1280.jpg"];
            var result = Math.floor((Math.random() * image.length) + 0);
            
            var embedX = new Discord.RichEmbed()
	    .setImage(image[result])
            .setColor("0xF4D14F")
	    .setFooter("pour " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedX);
	}
	

//GG


 	if (msg.startsWith("GG ")){
		var nam = message.mentions.members.first();
		if (message.content == "GG " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "gg " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
    
//GL 

    }

	if (msg.startsWith("GL ")){
		var nam = message.mentions.members.first();
		if (message.content == "gl " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "GL " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}

    }

	
//NSFW VOTE

if (message.attachments.size > 0) {
	
	
	if (message.channel.nsfw === false) {
		return;}
	
const filter = (reaction, user) => reaction.emoji.id === '530170738599133204' && user.id === bot.user.id
const filterbad = (reaction, user) => reaction.emoji.id === '530170778663125022' && user.id === bot.user.id
        message.react(bot.emojis.get("530170778663125022"));
	message.react(bot.emojis.get("530170738599133204"));
	message.awaitReactions(filter, { time: 5000 })

  .then(collected => {
	const reaction = collected.first();
	console.log(`Collected ${collected.size} ${reaction.count} reactions`)
		if(collected.size > reaction.count / 2) {
message.pin(reaction.message);
}
	})
  .catch(console.error);

//MUSIC

}
if (msg.startsWith(prefix + "play")) {
	const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();
	let args = message.content.split(" ").slice(1);
	let thingToEcho = args.join(" ");
message.member.voiceChannel.join()
  .then(connection => {
    const stream = ytdl(thingToEcho, { filter : 'audioonly' });
    broadcast.playStream(stream);
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);
}
	
if (msg.startsWith(prefix + "google")) {
message.member.voiceChannel.leave()
}
//GARFIELD
    if (message.content == prefix + "garfield") {

	message.delete();
	    
    	var imagegarf = ["https://pbs.twimg.com/media/DtB_yXVXoAAw4kU.jpg",
			"https://pbs.twimg.com/media/DwHcArvUYAAM9Nq.jpg",
			"https://pbs.twimg.com/media/DwHFalOUwAAwlfi.jpg",
			"https://pbs.twimg.com/media/DwGl9FAVAAAA1ue.jpg",
			"https://pbs.twimg.com/media/DwGIAKiUwAA3T_j.jpg",
			"https://pbs.twimg.com/media/DwFsFFoVYAA9Lgg.jpg",
			"https://pbs.twimg.com/media/DwFRQ-dUUAERIcq.jpg",
			"https://pbs.twimg.com/media/DwE3O3tU0AI67iE.jpg",
			"https://pbs.twimg.com/media/DwCd5EXV4AAUJjS.jpg",
		        "https://pbs.twimg.com/media/DwCC1yCVsAAtXrJ.jpg",
			"https://pbs.twimg.com/media/DwBm-1qU8AA-79p.jpg",
			"https://pbs.twimg.com/media/DwBM8GrVAAAzWts.jpg",
			"https://pbs.twimg.com/media/DwAxFKVU0AAb9Hu.jpg",
			"https://pbs.twimg.com/media/DwAcRbaVsAAekh1.jpg",
			"https://pbs.twimg.com/media/Dv_5ldVV4AEChot.jpg",
			"https://pbs.twimg.com/media/Dv9LPmyUYAA6RtG.jpg",
			"https://pbs.twimg.com/media/Dv8sJ-HU8AAVBRZ.jpg",
			"https://pbs.twimg.com/media/Dv8Vv8ZVYAA7tMV.jpg",
			"https://pbs.twimg.com/media/Dv7-gLhVsAAF9ii.jpg",
			"https://pbs.twimg.com/media/Dv7Z4RPUwAA1E3F.jpg",
			"https://pbs.twimg.com/media/Dv7GGvFUcAEgH72.jpg",
			"https://pbs.twimg.com/media/Dv6n1FzUUAA6BG-.jpg",
			"https://pbs.twimg.com/media/Dv39AvQV4AA0QTQ.jpg",
			"https://pbs.twimg.com/media/Dv3hmk1UwAACEll.jpg",
			"https://pbs.twimg.com/media/Dv3GqgIUYAA38oO.jpg",
			"https://pbs.twimg.com/media/Dv2uJZuUYAAWaO6.jpg",
			"https://pbs.twimg.com/media/Dv2RazMVsAAwwNg.jpg",
			"https://pbs.twimg.com/media/Dv13rH6VYAAWxNF.jpg"];
            var resultgarf = Math.floor((Math.random() * imagegarf.length) + 0);
            
            var embedgarf = new Discord.RichEmbed()
	    .setImage(imagegarf[resultgarf])
            .setColor("ffa303")
	    .setFooter("for " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedgarf);
	}
});

//JOUEURS
bot.on('messageReactionAdd', (reaction, user) => {
	
var multi = bot.emojis.get("434047602602803200");
	
    if(reaction.emoji.identifier === "434047602602803200") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});
