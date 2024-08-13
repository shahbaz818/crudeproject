require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/userModels.js')


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const port = 5000

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Mongodb is connected')
    })
    //import router
const router = require('./routes/userRoutes.js')
    //const router1 = require('./controllers/userControllers.js')

app.use('/api/v1/user', router, (req, res) => {
    try {
        console.log(req.body)
        res.send(req.body)
    } catch (err) {
        console.log({ err: 'cont connect' })
    }

})



app.get('/data', async(req, res) => {
    try {
        const receieve = await User.find({});
        res.send(receieve)
    } catch (err) {
        console.log({ err: "cant get data" })
    }


})
app.get('/read/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const receieve = await User.findById({ _id: id })
        console.log(receieve)
        res.send(receieve)

    } catch (err) {
        console.log({ err: 'cant get single user' })
    }
})


app.put('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.send(user)
        console.log(user);


    } catch (err) {
        res.send(err)
    }
})

app.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete({ _id: id })
        console.log(user);
        res.send(user)

    } catch (err) {
        res.send(err)
    }
})


app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})