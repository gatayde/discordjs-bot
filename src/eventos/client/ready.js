module.exports = async (bot, ready) => {


  console.log('BOT SUCCESFULLY STARTED | ✅');
  console.log('SUCCESFULLY STARTED | ✅');
  
  const status = [
    "online",
    "dnd",
    "idle"
  ]

  const atividades = [
    [`xx`, "WATCHING"],
    [`#PAZ`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 15000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 20000)

}  





