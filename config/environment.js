const PORT = process.env.PORT || 2000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jungle-kobenhavn'
const secret = 'secret secret'

module.exports = { 
  PORT, 
  dbURI, 
  secret 
}