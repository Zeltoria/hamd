import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// Real Owner moved to db.data.datas.rowner
global.mods = ['62895624713377'] // Developer / Mods Number
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	bg: 'http://bochil.ddns.net',
	xteam: 'https://api.xteam.xyz',
	zahir: 'https://zahirr-web.herokuapp.com',
	zeks: 'https://api.zeks.xyz',
	pencarikode: 'https://pencarikode.xyz',
	LeysCoder: 'https://leyscoders-api.herokuapp.com',
	lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://api.xteam.xyz': 'd90a9e986e18778b',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
	'https://api.zeks.xyz': 'apivinz',
	'https://pencarikode.xyz': 'pais',
	'https://leyscoders-api.herokuapp.com': 'dappakntlll',
	'https://api.lolhuman.xyz': 'a6b72248631176cbfd016a33u'
}

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: 'π§¬',
			limit: 'π',
			health: 'β€οΈ',
			exp: 'βοΈ',
			money: 'π΅',
			potion: 'π₯€',
			diamond: 'π',
			common: 'π¦',
			uncommon: 'π',
			mythic: 'π³οΈ',
			legendary: 'ποΈ',
			pet: 'π',
			trash: 'π',
			armor: 'π₯Ό',
			sword: 'βοΈ',
			pickaxe: 'βοΈ',
			fishingrod: 'π£',
			bow: 'πΉ',
			wood: 'πͺ΅',
			rock: 'πͺ¨',
			string: 'πΈοΈ',
			horse: 'π',
			cat: 'π',
			dog: 'π',
			fox: 'π¦',
			wolf: 'πΊ',
			centaur: 'π',
			phoenix: 'π¦',
			dragon: 'π',
			petfood: 'π',
			iron: 'βοΈ',
			gold: 'π',
			emerald: 'π',
			bibitmangga: 'πΎ',
			bibitanggur: 'πΎ',
			bibitjeruk: 'πΎ',
			bibitpisang: 'πΎ',
			bibitapel: 'πΎ',
			mangga: 'π₯­',
			anggur: 'π',
			jeruk: 'π',
			pisang: 'π',
			apel: 'π',
			ayam: 'π',
			kambing: 'π',
			sapi: 'π',
			kerbau: 'π',
			babi: 'π',
			harimau: 'π',
			banteng: 'π',
			monyet: 'π',
			babihutan: 'π',
			panda: 'πΌ',
			gajah: 'π',
			buaya: 'π',
			orca: 'π',
			paus: 'π³',
			lumba: 'π¬',
			hiu: 'π¦',
			ikan: 'π',
			lele: 'π',
			bawal: 'π‘',
			nila: 'π ',
			kepiting: 'π¦',
			lobster: 'π¦',
			gurita: 'π',
			cumi: 'π¦',
			udang: 'π¦',
			steak: 'π',
			sate: 'π’',
			rendang: 'π',
			kornet: 'π₯£',
			nugget: 'π±',
			bluefin: 'π²',
			seafood: 'π',
			sushi: 'π£',
			moluska: 'π₯',
			squidprawm: 'π€',
			rumahsakit: 'π₯',
			restoran: 'π­',
			pabrik: 'π―',
			tambang: 'βοΈ',
			pelabuhan: 'π³οΈ'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
