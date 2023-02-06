let handler = async (m, { text }) => {
    let user = global.DATABASE.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  ${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
  `)
  }
  handler.menugroup = ['afk [alasan]']
  handler.tagsgroup = ['group']
  handler.command = /^afk$/i
  
  export default handler