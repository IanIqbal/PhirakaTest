const express = require("express")
const router = require("./routes/indexRoutes")
const app = express()
const port = 3000
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})