import { sfilemobi, sfilemobiSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) throw `For searching in sfilemobi :\nUsage : *${usedPrefix + command} query*\n\nFor download from url :\nUsage : *${usedPrefix + command} sfilemobi_url*`
	if (text.includes('http://') || text.includes('https://')) {
		if (!text.includes('sfile.mobi')) return m.reply('Bukan web sfile.mobi itu bre')
		try {
			let res = await sfilemobi(`${text}`)
			if (res.filesize > 200000) return m.reply(`Filesize: ${res.filesizeH}\nTidak dapat mengirim, maksimal file 200 MB`)
			let txt = `_*Downloading file, don't spam . . .*_\n\n[ FILE INFO ]\n`
			txt += `filename : ${res.filename}\n`
			txt += `type : ${res.type}\n`
			txt += `upload : ${res.aploud}\n`
			txt += `upload by : ${res.aploudby}\n`
			txt += `download : ${res.downloads}\n`
			txt += `filesize : ${res.filesizeH}`
			m.reply(txt)
			//await conn.sendMessage(m.chat, {document: { url: res.url }, mimetype: `${res.filename.split('.').pop()}`, fileName: `${res.filename}`}, { quoted : m })
			await conn.sendFile(m.chat, res.url, `${res.filename}`, null, m)
		} catch (e) {
			console.log(e)
			m.reply(`Tidak ditemukan hasil.`)
		}
	} else {
		try {
			let json = await sfilemobiSearch(`${text}`)
			let txt = `Found : *${text}*`
			for (let x of json) {
				txt += `\n\nFilename : ${x.filename}\n`
				txt += `Type : ${x.type}\n`
				txt += `Size : ${x.filesizeH}\n`
				txt += `Link : ${x.url}\n`
				txt += `───────────────────`
			}
			m.reply(txt)
		} catch (e) {
			console.log(e)
			m.reply(`Tidak ditemukan hasil.`)
		}
	}
}

handler.menudownload = ['sfilemobi <query>','sfilemobi <url>']
handler.tagsdownload = ['search']
handler.command = /^(sfile(mobi)?)$/i


handler.limit = true

export default handler