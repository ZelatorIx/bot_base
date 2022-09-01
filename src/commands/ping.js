const { SlashCommandBuilder } = require('discord.js');

const data = () => {
    return new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!');
};

const ping = async (interaction) => {
    console.log('Command: ping');
    console.log('coucou :)');
    await interaction.reply('Pong!');
};

module.exports = {
    data: data(),
    async execute(interaction) {
        await ping(interaction);
    }
};