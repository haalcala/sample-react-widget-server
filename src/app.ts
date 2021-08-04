var express = require("express")

var app = express()

app.use(express.static('public'))

console.log("app:", app)

const port = 80

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})