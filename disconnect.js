module.exports = {
    name: 'kos',
    description: "This command btkosom zbow!",
    execute(messages, args) {
        const target = messages.mentions.users.first();
        if (target) {
            const memberTarget = messages.guild.members.cache.get(target.id);
            member.voice.setChannel(null);
            messages.channel.send("kosomzbow");
        } else {
            messages.channel.send(`where the fuck is zbow`);
        }
    }
}