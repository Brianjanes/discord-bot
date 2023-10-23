//This file will need to be ran every time a command is added! Don't forget!

const {
  Routes,
  REST,
  ApplicationCommandOptionType,
  EmbedBuilder,
} = require("discord.js");
require("dotenv").config();

const commands = [
  // {
  //   name: "hey",
  //   description: "Replies with hey!",
  // },
  // {
  //   name: "ping",
  //   description: "Replies with pong!",
  // },
  // {
  //   name: "bing",
  //   description: "Replies with bong!",
  // },
  {
    name: "add",
    description: "Adds 2 numbers",
    options: [
      {
        name: "first-number",
        description: "The first number",
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: "one",
            value: 1,
          },
          {
            name: "two",
            value: 2,
          },
          {
            name: "three",
            value: 3,
          },
        ],
        required: true,
      },
      {
        name: "second-number",
        description: "The second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering clash comamnds");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Slash commands have been registered successfully");
  } catch (error) {
    console.log("Error: ", error);
  }
})();
