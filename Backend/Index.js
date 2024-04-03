const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require('./Routers/userRouter')

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}))

app.use('/user', UserRouter)


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})