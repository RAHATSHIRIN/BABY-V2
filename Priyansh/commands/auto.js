module.exports.config = {
  name: "auto",
  version: "1.0.",
  hasPermssion: 0,
  credits: "𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊",
  description: "All video Downloader",
  commandCategory: "other",
  usags: "all video link",
  usePrefix: true,
  cooldowns: 5,
  dependencies: {
    axios: "",
    "fs-extra": "",
    tinyurl: "",
  },
};
start: async function({ nayan, events, args }) {},
handleEvent: async function ({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const {alldown} = require("nayan-media-downloader")
  if (body.startsWith("https://")) {
  api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
const data = await alldown(content);
  console.log(data)
  const {low, high, title} = data.data;
    api.setMessageReaction("✔️", event.messageID, (err) => {}, true);
  const video = (await axios.get(high, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"))

        return api.sendMessage({
            body: `《TITLE》: ${title}`,
            attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")

        }, event.threadID, event.messageID);
    }
}
}
