import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Soekarno adalah`
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/brainly?apikey=${apilol}&query=${encodeURIComponent(text)}`)
		let json = await res.json()
		if (json.status != '200') throw `Informasi tidak tersedia.`
		let get_result = json.result
		let txt = "*Result :*"
		for (var x of get_result) {
			txt += `\n\n*Question :*\n${x.question.content}\n`
			txt += `*Answer :*\n${x.answer[0].content}\n`
			txt += `───────────────────`
		}
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`Informasi tidak tersedia.`)
	}
}

handler.help = ['brainly <teks>']
handler.tags = ['information']
handler.command = /^(brainly)$/i


handler.limit = true

export default handler