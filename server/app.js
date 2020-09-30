const express = require("express")
const app = express()
const postRouter = require("./routes/post_routes")
const port = 3000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({
        message:"Hello World!"
    })
})

app.post('/studentNames', (request, response) => {
    let incomingData = request.body.studentNames;
    console.log(incomingData);
    response.json({
        firstStudentName: incomingData[0]
    })
})

// any routes starting /posts must be redirected to post_routes file
// ensure its exported
app.use("/posts", postRouter)

const server = app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`)
})

// to test with supertest
module.exports = {
    app,
    server
}