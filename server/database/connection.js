const mongoose = require('mongoose')
const databaseUrlWorking = "mongodb://127.0.0.1/argentBank"

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || databaseUrlWorking, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
