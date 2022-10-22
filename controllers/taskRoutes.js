const router = require('express').Router()
const {Task} = require('../models')

router.get('/',async (req,res) => {
    res.json("Pointed to taskRoutes folder")
    
})

router.post('/', async (req,res) => {
    try {
        const taskData = await Task.create(req.body)
        res.status(200).json({msg: "Posted to task table", taskData})
    }
    catch(err) {
        res.status(400).json(err)
    }
})

module.exports=router;