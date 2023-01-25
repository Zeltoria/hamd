let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/HamBotz/hamd.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    conn.sendButton(m.chat, stdout.toString(), wm,`Node Test`, `$ node test`, m)
  }
}
handler.menuowner = ['update']
handler.tagsowner = ['ownerr']
handler.command = /^(update|uo?p?|uodate)$/i //sedia payung sebelum hujan meteor 

handler.rowner = true

module.exports = handler
// made with fokusID