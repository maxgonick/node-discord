import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { EmbedBuilder } from "discord.js";
import "dotenv/config";
const sendMessage = async (body) => {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
  //Check for Truncation
  if ((body.msgBody.length > 4096)) {
    body.msgBody = body.msgBody.substring(0, 4093) + "...";
  }
  const myEmbed = new EmbedBuilder()
    .setTitle(body.subject)
    .setURL("https://mail.google.com/mail/u/0/#inbox/" + body.emailId)
    .setAuthor({
      name: body.sender,
    })
    .addFields(
      { name: "Date:", value: body.date }
    )
    .setDescription(body.msgBody);

  try {
    //Magic Constants for Length of Embed Messages
    await rest.post(Routes.channelMessages(process.env.CHANNEL_ID), {
      body: {
        embeds: [myEmbed],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default sendMessage;
