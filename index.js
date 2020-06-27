const express = require("express")
const helmet = require("helmet")


const sever = express()
const port = process.env.PORT || 5000


Server.use(helmet())
server.use(express.json())


server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        Message: "Something Went Wrong"
    })
})


server.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})