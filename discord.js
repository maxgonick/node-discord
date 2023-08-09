import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import "dotenv/config";

const sendMessage = async (body) => {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.post(Routes.channelMessages(process.env.CHANNEL_ID), {
      body: {
        content: body.body,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default sendMessage;