const express = require("express")
const cors = require("cors")
const homeRouter = require("./routes/home.route")

const port = process.env.PORT || 9000

const app = express()

app.use(cors())

app.use("/api/v1", homeRouter)

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
})
