import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { EmbedBuilder } from "discord.js";
import "dotenv/config";
const sendMessage = async (body) => {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  const myEmbed = new EmbedBuilder()
    .setTitle(body.subject)
    .setURL("https://mail.google.com/mail/u/0/#inbox/" + body.emailId)
    .setAuthor({
      name: body.sender,
    })
    .addFields(
      {
        name: "From:",
        value: body.sender,
      },
      { name: "Date:", value: body.date },
      { name: "Body:", value: body.msgBody }
    );

  try {
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
