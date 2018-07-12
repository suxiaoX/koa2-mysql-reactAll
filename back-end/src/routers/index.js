const user = require('./user')
const note = require('./note')
const blog = require('./blog')
const img = require('./img')
const router = require('koa-router')()

router.use('/api/user', user)
router.use('/api/note', note)
router.use('/api/blog', blog)
router.use('/api/img', img)

module.exports = router