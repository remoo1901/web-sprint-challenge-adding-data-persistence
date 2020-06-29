const express = require("express")
const helmet = require("helmet")

const projectsRouter = require("./routers/projects")
const resourcesRouter = require("./routers/resources")
const tasksRouter = require("./routers/tasks")


const server = express()
const port = process.env.PORT || 5000


server.use(helmet())
server.use(express.json())

server.use(projectsRouter)
server.use(resourcesRouter)
server.use(tasksRouter)


server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        Message: "Something Went Wrong"
    })
})


server.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})