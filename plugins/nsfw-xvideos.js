import db from '../lib/database.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let chat = db.data.chats[m.chat]
	if (!chat.nsfw && m.isGroup) throw `[ *NSFW GAK AKTIF* ]`
	if (!text) throw `Just type query what u need :\nUsage : *${usedPrefix + command} step mother*`
	if (text.includes('http://') || text.includes('https://')) return m.reply(`Only accept query, not url.`)
	try {
		let res = await fetch(`https://azami-api.herokuapp.com/api/search/xvideos?query=${encodeURIComponent(text)}&apikey=${global.bb}`)
		let json = await res.json()
		let get_result = json.result
		let txt = `Found : *${text}*`
		for (var x of get_result) {
			txt += `\n\n*${x.title}*\n`
			txt += `"${x.info}"\n`
			txt += `_${x.link}_\n`
			txt += `───────────────────`
		}
		m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`No Result Found.`)
	}
}

handler.menunsfw = ['xvideos <query>']
handler.tagsnsfw = ['search']
handler.command = /^(xvideos?(web|search)?)$/i


handler.limit = true

export default handler