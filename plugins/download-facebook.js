import { snapsave } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await snapsave(args[0])
    for (const { url, isVideo } of result.reverse()) 
    conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
}
handler.menudownload = ['facebook <url>']
handler.tagsdownload = ['search']

handler.command = /^(facebook|fb|downloder|dl?)$/i

export default handler