
const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `🪷 *anuncio:* ${pesan}`;
  let teks = `🪷 *Levi bot les desea feliz mes del amor zorras*\n${colombia}\n\n┏ ☠︎︎𝐋𝐄𝐕𝐈 𝐁𝐎𝐓\n`;
  
  for (const mem of participants) {
    teks += `┋🪷@${mem.id.split('@')[0]}\n`;
  }
  
  teks += `┗ ${dev}`;

  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};

handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar', 'todos'];
handler.admin = true;
handler.group = true;
export default handler;