const dotenv = require('dotenv').config() // npm i dotenv -- allows the .env file to connect to this one
const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

app.use('/api/*', (_, res) => { // (req, res), the underscore is a placeholder
  res.json({
  
    "people": [
      {
        "craft": "ISS",
        "name": "Mark Vande Hei"
      },
      {
        "craft": "ISS",
        "name": "Pyotr Dubrov"
      },
      {
        "craft": "ISS",
        "name": "Anton Shkaplerov"
      },
      {
        "craft": "Shenzhou 13",
        "name": "Zhai Zhigang"
      },
      {
        "craft": "Shenzhou 13",
        "name": "Wang Yaping"
      },
      {
        "craft": "Shenzhou 13",
        "name": "Ye Guangfu"
      },
      {
        "craft": "ISS",
        "name": "Raja Chari"
      },
      {
        "craft": "ISS",
        "name": "Tom Marshburn"
      },
      {
        "craft": "ISS",
        "name": "Kayla Barron"
      },
      {
        "craft": "ISS",
        "name": "Matthias Maurer"
      }
    ]
  })
})

// console.log("it is alive")
// console.log('__dirname', __dirname)
// console.log('__filename', __filename)
// console.log(process.env.APIKEY)
// console.log(process.env.DBPASS)
// console.log(process.env.PORT)
