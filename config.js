import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.owner = [
   ['573143681055', 'Creador prakharper 🚀', true],
   ['50498409019', 'CrowBot Soporte', true],
   ['584241836217', 'Support2', true],
   ['573163454715', 'Liam', true],
   ['', 'Colaborador ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜', true],
   ['', 'im fz~', true],
   ['', 'Colaborador Prak', true],
   ['', 'Darkcore - Tu papa', true],
   ['', 'Joker Bot OFF', true],
]

global.creadorbot = [
   ['573143681055', 'prak', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【☠︎︎】𝐋𝐈𝐀𝐌𝐁𝐨𝐭࿐'
global.botname = '(✦◠‿◠) 𝐩𝐫𝐚𝐤 𝐡𝐚𝐫𝐩𝐞𝐫'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ👑☠︎︎ ׄ ꒱ 𝑳𝒊𝒂𝒎𝑩𝒐𝒕 - 𝑺.𝑪.𝑨 ୭'
global.author = '꒷꒦𖥻𝐁𝐲 𝐏𝐫𝐚𝐤 𝐇𝐚𝐫𝐩𝐞𝐫𓆪'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ s𝗍ᥲrᥴ᥆rᥱ-𝗍ᥱᥲm'
global.errorm = '𝐄𝐫𝐫𝐨𝐫: ${error.message}'
global.errorm2 = '✰ 𝐀 𝐎𝐜𝐮𝐫𝐫𝐢𝐝𝐨 𝐔𝐧 𝐄𝐫𝐫𝐨𝐫, 𝐕𝐮𝐞𝐥𝐯𝐞 𝐌𝐚𝐬 𝐓𝐚𝐫𝐝𝐞 (৹˃̵﹏˂̵৹)'
global.resp = '𝐀𝐪𝐮𝐢 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 〜(^∇^〜)'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.nombrebot = 'LiamBot'
global.textbot = `「 👑 𝐋𝐢𝐚𝐦𝐁𝐨𝐭 - 𝐌𝐃 👑 」`
global.vs = '2.1.0'
global.publi = '☠︎︎𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo1.jpg')
global.crowurl = fs.readFileSync('./storage/img/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobot = 'https://github.com/Prakharper/Liam'
global.grupo = 'https://whatsapp.com/channel/0029VbA8khtAojYojh8unV03'
global.comu = 'https://whatsapp.com/channel/0029VbA8khtAojYojh8unV03'
global.channel = 'https://whatsapp.com/channel/0029VbA8khtAojYojh8unV03'
global.insta = 'https://www.instagram.com/harperprak'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
