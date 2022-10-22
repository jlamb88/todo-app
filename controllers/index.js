const router = require('express').Router()
const taskRoutes = require('./taskRoutes')
const userRoutes = require('./userRoutes')

router.use('/task', taskRoutes)
router.use('/user', userRoutes)



module.exports=router;