const taskRouter = require("../router/task.router")

module.exports = (app)=>{
    const version = "/api/v1"

    app.use(version + "/task",taskRouter)

}