
//external modules
const express = require('express')


//express instance 
const app = express()

//port
const PORT = process.env.PORT || 3000

//DB connection


//Middleware
// app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes to be moved  app.use('/', routes.)
app.get('/', (req, res) => {
    res.send(`<h1>Calendar Goes Here</h1>`)
    console.log("working")
})


//listener

app.listen(PORT, () => {
    console.log('listening to ', PORT)
  })
