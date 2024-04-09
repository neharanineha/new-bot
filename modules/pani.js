const fs = require("fs");
module.exports.config = {
	name: "pani",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "daru",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pani")==0 || event.body.indexOf("paani")==0 || event.body.indexOf("🥛")==0 || event.body.indexOf("🥤")==0) {
		var msg = {
				body: "Aajao milke pite hai 🍻🍷🍺",
				attachment: fs.createReadStream(__dirname + `/noprefix/received_281875434961599.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
