const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');


var prefix = ("*");

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
	

    
	
	if (message.content.startsWith(prefix + "fnbr shop")) {
	message.delete();
		var embedX = new Discord.RichEmbed()
	    .setImage("http://orcz.com/images/c/cc/FortniteBattleRoyaleItemShopScreen.jpg")
            .setColor("0xF4D14F")
	    .setFooter("pour " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedX);
		
	}
	
    if (message.content.startsWith(prefix + "sondage")) {
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embedS = new Discord.RichEmbed()
            .setTitle("SONDAGE")
	    .setDescription("Question de "+ message.author)
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embedS)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

	
    if (message.content === prefix + "rigolo"){
        message.channel.sendMessage("TU ES MOCHE !");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
		.setThumbnail(message.guild.iconURL)
		.setTitle("INFO")
		.setDescription("Information du serveur")
		.addField("Nom", message.guild.name)
		.addField("Membres", message.guild.memberCount)
		.setColor("0xF4D03F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);
    

    }

    if (message.content == prefix + "avatar") {
     // Send the user's avatar URL
        message.channel.send(message.author.avatarURL);
    }
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
    
    if (message.content.includes(" WAE") || message.content.includes(" wae")){
	var knuckles = bot.emojis.get("432968588383748116");
	var lolidragon = bot.emojis.get("433289550375419904");
	var dab = bot.emojis.get("432915228947120129");
           var sayings = ["FOLLOW ME MA BRUDDAH I KNOW DA WAE !\n ${knuckles}${knuckles}${knuckles}",
										"COME ON MY BRUDAH WE WILL MAKE AN ARMY !\n ${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}",
										"DO YOU KNOW DA WAE ! ${knuckles}",
		       								"WER IS DA WAE ? ${knuckles}",
										"WER IS DA QUEEN ? ${knuckles}",
		       								"THERE IS DA QUEEN !\n${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${knuckles}${lolidragon}"];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result], true);
    }

    if (message.content.includes(" PATES") || message.content.includes(" BURGER") || message.content.includes(" PIZZA") || message.content.includes(" PÂTES") || message.content.includes(" pates") || message.content.includes(" burger") || message.content.includes(" pizza") || message.content.includes(" pâtes")) {
        message.reply("Arrête de parler de bouffe j'ai faim :/");
    }
    
    if (message.content.includes(" DAB") || message.content.includes(" dab")){
	var knuckles = bot.emojis.get("432968588383748116");
	var lolidragon = bot.emojis.get("433289550375419904");
	var dab = bot.emojis.get("432915228947120129");
	var parrot = bot.emojis.get("432970357536718858.")
           var sayings = ["LE ${dab} NÉ PA MOR !",
										"J'EFFECTUE LE ${dab} !",
										"J'APPRÉCIE DABBER ${dab} !",
		       								"JE FAIS UN ${dab} DU NEZ !"];
			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result], true);
    }
    if (message.content == "BOT" || message.content == "bot"){
        message.channel.sendMessage("Donc... je suis pas un vrai petit garcon ? :/");
    }
    
    if (message.content.includes(" HEURE") || message.content.includes(" heure")) {
	   message.channel.sendMessage("L'HEURE DE T'ACHETER UNE MONTRE !");
    }
    if (message.content.includes("WOW") || message.content.includes("WAW") || message.content.includes("wow") || message.content.includes("waw")){
        message.reply("T'as vu, c'est dingue !");
    }

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
	
    if (message.content == "!%!DevCommu"){
        message.guild.channels.find("name", "📰partenariats📰").sendMessage("Bonjour bonsoir @everyone, comment allez vous ? Aujourd'hui j'ai l'immense plaisir de vous présenter le serveur de <@397364192908410880>, un serveur communautaire nommé CodeCommunity_ Celui ci comporte la communauté de la TEAM de développement web, @CodeGroup. En effet, CodeGroup est une équipe de développeurs web, réalisant des projets et apprenant ensemble. Celle-ci comporte plus de 10 membres et recrute d'avantage. Si tu es intéressé par cette fameuse TEAM de développement, je t'invite donc à lire l'annonce pixelsads situé dans le serveur communautaire. Voila, j'ai tout dis :v:\nhttps://discord.gg/m8UvDDE");
    }
   
    if (message.content == "!%!LightLife"){
        message.channel.sendMessage("__***👾 L↓GHT L↑FE 👾***__ **Recrutement :x:**\n🗺️ CLIQUEZ SUR CE LIEN INCROYABLE POUR COMMENCER L'AVENTURE https://discord.gg/apjU2vb 🗺️\n\n__L↓GHT L↑FE vous de permet de :__\n\n```htm\n📌Rencontrez vos futurs amis et vos futurs rivaux ! | 😄💬 ⇝ 🎭🎭�\n📌Discuter avec plein de gens (pis voir du hentai) ! | 😄💬 ⇝ 😄💬\n📌Jouer sur des jeux avec d'autres joueurs ! | 🎮 ⇝ 🎮⚔️️🎮\n📌Avoir un grade STAR si vous êtes STREAMER/VIDEASTE ! | 📹‍ ⇝ ‍‍‍‍👯‍😎👯‍\n```\n\n🤜 Sur L↓GHT L↑FE vous êtes (PRESQUE) libre de faire votre pub ! | 📰 ⇝ 🤑\n\n👉 ***En plus on a un bot perso qui est très rigolo !*** | 🤖💬 ⇝ 🤣\n\n🔗 CLIQUEZ SUR CE LIEN POUR REJOINDRE LE SERVEUR https://discord.gg/apjU2vb 🔗\n\n\nServeur de <@328514801124900866>\n@everyone");
    }

    if (message.content === prefix + "invite"){
        var embed3 = new Discord.RichEmbed()
		.setThumbnail(bot.user.avatarURL)
		.setTitle("INVITE")
		.setDescription("AJOUTER LE BOT A VOTRE SERVEUR !")
		.addField("Lien", "[Ajoute moi !](https://lightlifefr.wix.com/rainbow)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.sendEmbed(embed3);
    }

    if (message.content.includes("xD") || message.content.includes("lol") || message.content.includes("mdr")) {
    	var sayings = ["jui mort X)",
										"ptdr",
										"C'est pas drôle",
		       								"C'est pas ouf en faites, jcp pourquoi tu trouve ca drôle",
										"Ahah",
		       								"jui mort x)",
		      								"Tu rigole au pif?",
										"Attention, vous allez recevoir 100 exemplaires de ***l'humour pour les nuls***",
										"Juste c'est pas drôle en vrai"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result]);
    }
	
	
    if (message.content.includes("tu es moche") || message.content.includes("t'es moche") || message.content.includes("Tu es moche")) {
    	var sayings = ["Nan méo",
										"PARDON !? T'AS VU TA GUEULE CONNASSE !?",
										"Pas de ouf mdr"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.sendMessage(sayings[result]);
    }
	
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
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("FUN", "`*rigolo` | `*troprigolo` | `*creepy` | `*blague`")
		.addField("UTILES", "`*info` (pour voir les informations du serveurs)\n`*invite` (pour inviter le bot sur votre serv)\n`*avatar` (pour avoir votre PP)\n`*aide` (bah... pour l'aide quoi.)\n`*news` (pour voir mes nouveautées)\n`*sondage <question>` (pour faire un sondage)")
		.addField("JEUX", "\`*multi <NOM DU JEU>\` (Pour faire une recherche de joueurs)")
		.addField("PLUS", "`*aide nsfw` pour voir des trucs cochons (**seulement dans un channel nsfw**)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }
    
    
    if (message.content === prefix + "news"){
        var embed4 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("VOICI MES NOUVEAUTÉES !")
		.setDescription("\n")
		.addField("AJOUTS", "📌Ajout de la commandes : \`*aide nsfw\` Pour voir des trucs cochons (**seulement dans un channel nsfw**)\nAvec en prime des commandes cochones à découvrir avec celle-ci ! :D")
		.addField("PATCH", "🌀 Des fois je crashais (encore +) 🌀")
		.setColor("0xF4D14F")
		.setFooter("Version 1.5")
        message.channel.sendEmbed(embed4);
    }	
	
	
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
	if (message.content.includes("TG") || message.content.includes("FTG") || message.content.includes("NTM") || message.content.includes("FDP") || message.content.includes("PUTE") || message.content.includes("SALOPE") || message.content.includes("CONNARD") || message.content.includes("SALOP") || message.content.includes("PUTAIN") || message.content.includes("TA GUEULE") || message.content.includes("BITE") || message.content.includes("CUL") || message.content.includes("tg") || message.content.includes("ftg") || message.content.includes("ntm") || message.content.includes("fdp") || message.content.includes("pute") || message.content.includes("salope") || message.content.includes("connard") || message.content.includes("salop") || message.content.includes("putain") || message.content.includes("ta gueule") || message.content.includes("bite") || message.content.includes("cul")){
        	if (message.channel.nsfw === false) {
		message.react(bot.emojis.get("433316429044121601"));
	}
	}

	
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
	
if (message.content.startsWith(prefix + "annonce")){
	 
	let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
	 
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
	}
	 
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("https://image.noelshack.com/fichiers/2018/16/6/1524330497-annonce.png")
		.setTitle(thingToEcho)
		.setDescription("@everyone")
		.setTimestamp()
		.setColor("cc55ee")
        message.channel.sendEmbed(embed2);
    }

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

	
	if (message.content.startsWith(prefix + "fnbr pass")) {
	message.delete();
		var embedX = new Discord.RichEmbed()
	    .setTitle("FORTNITE | PASSE DE COMBAT")
	    .setDescription("SAISON 4")
	    .setImage("https://drive.google.com/file/d/1-J_txaZgXC0FckxmjjUcL9G6pTCSpDK_/view?usp=sharing")
            .setColor("0xF4D14F")
	    .setFooter("pour " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedX);
		
	}
if (message.attachments.size > 0) {
	
	
	if (message.channel.nsfw === false) {
		return;}
	
const filter = (reaction, user) => reaction.emoji.id === '530170738599133204' && user.id === 'someID'
        message.react(bot.emojis.get("530170778663125022"));
	message.react(bot.emojis.get("530170738599133204"));
	message.awaitReactions(filter, { time: 5000 })

  .then(collected => {
	const reaction = collected.first();
	console.log(`Collected ${collected.size} reactions`)
		if(collected.size > message.guild.memberCount / 2.1) {
message.pin(message.id);
}
	})
  .catch(console.error);
	
}
});

bot.on('messageReactionAdd', (reaction, user) => {
	
var multi = bot.emojis.get("434047602602803200");
	
    if(reaction.emoji.identifier === "434047602602803200") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});
