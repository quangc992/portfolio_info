const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose
      .connect('mongodb+srv://quangadmin:quangc123@cluster0.yaaq4.mongodb.net/profile_quangc');
    console.log('✔✔✔')
  } catch (error) {
    console.log('🛠🛠🛠🛠 : connect db error')
    console.log(error)
  }
}
module.exports = {
  connect
}