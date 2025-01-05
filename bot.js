const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function startBot() {
    const conn = new WAConnection();

    // Load previous session
    conn.loadAuthInfo('./auth_info.json');
    await conn.connect();

    // Save session to avoid re-login
    const authInfo = conn.base64EncodedAuthInfo();
    fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t'));

    conn.on('chat-update', async (chat) => {
        if (!chat.hasNewMessage) return;

        const m = chat.messages.all()[0];

        if (!m.message) return;

        // Check if the message is from a new number (unsaved)
        const sender = m.key.remoteJid;
        if (sender.endsWith('@s.whatsapp.net')) {
            const contact = await conn.isOnWhatsApp(sender);
            if (!contact.exists) {
                const replyMessage = `
                *Name*: CyberEshu
                *From*: Galle
                *Age*: 18
                *CON* : 94704932651

                _you .....?_ 🫂
                `;
                await conn.sendMessage(sender, replyMessage, MessageType.text);
            }
        }
    });
}

startBot().catch(err => console.log("unexpected error: " + err));




cmd({
    pattern: "join",
    desc: "joins group by link",
    category: "main",
    use: '<group link.>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner,isKavishan, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isMe)return;
try{  if (!q) return reply(`Please give me Query`);
    if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
       reply("Link Invalid, Please Send a valid whatsapp Group Link!");
    let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    await conn.groupAcceptInvite(result)
        .then((res) => reply("✔️Joined Group"))
        .catch((err) => reply("Error in Joining Group"));
} catch (e) {
    reply("🚩 Not Found !")
    console.log(e)

}
})