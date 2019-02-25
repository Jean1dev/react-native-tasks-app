const app = require('express')()
const port = 8090
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middleawares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})