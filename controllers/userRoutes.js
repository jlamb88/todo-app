const router = require('express').Router()
const { json } = require('sequelize');
const {User} = require("../models")

router.get('/',async (req,res) => {
    try {
        const userData = await User.findAll({
            include: [{model:Task}]
        })
        console.log(userData);
        res.status(200).json(userData)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

router.post('/',async (req, res) => {
    try {
    const userData = await User.create(req.body);
    res.status(200).json({msg: "user info posted", userData})
    } catch(err) {
        res.status(400).json({msg: "invalid user data"})
    }
})
   
module.exports=router; 