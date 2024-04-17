const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require('./Routers/userRouter')
const schoolRouter = require('./Routers/schoolRouter')
const collegeRouter = require('./Routers/collegeRouter')
const universityRouter = require('./Routers/universityRouter')
const playwayRouter = require('./Routers/playwayRouter')

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}))

app.use('/user', UserRouter)
app.use('/school', schoolRouter)
app.use('/college', collegeRouter)
app.use('/university', universityRouter)
app.use('/playway', playwayRouter)


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})