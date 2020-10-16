const PORT = process.env.PORT || 2000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jungle-kobenhavn'

module.exports = { PORT, dbURI }