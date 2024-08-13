const User = require('../models/userModels.js')

const userCreate = async(req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send({ message: "All fields are required" })
        }

        const newUser = await User.create({ username, password, email })
        return res.status(400).send({ message: "All fields are required", newUser })


    } catch (err) {
        res.send({ err: "something went wrong" })
    }
}

//const userUpdate = async(req, res) => {
//    try {
//        const id = req.id.params;
//        const userUpdate1 = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true })
//        console.log(userUpdate)
//        res.sen(userUpdate1)
//
//
//    } catch (err) {
//        res.send({ err: "cant update" })
//    }
//}


module.exports = userCreate