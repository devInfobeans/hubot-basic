// Description:
//    An example script, tells you the time. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
// 
// Commands:
//    bot what time is it? - Tells you the time
//    bot what's the time? - Tells you the time
//
module.exports = (robot) => {
  robot.respond(/(what time is it|what's the time)/gi, (res) => {
    const d = new Date()
    const t = `${d.getHours()}:${d.getMinutes()} and ${d.getSeconds()} seconds`
    res.reply(`It's ${t}`)
  })
  robot.respond(/(who are you|who is this)/gi, (res) => {
   
    res.reply(`I am your personal chatbot`)
  })
}