const express = require('express')
const router = express.Router()
const passport = require('passport')

const users = require('../modules/users')
const tweets = require('../modules/tweets')
const followships = require('../modules/followships')
const admin = require('../modules/admin')
const userController = require('../../controllers/userController')
const { authenticated, authenticatedAdmin } = require('../../middleware/auth')
const { signInFail } = require('../../middleware/error-handler')

router.post('/signin', passport.authenticate('local', { session: false, failWithError: true }), userController.signIn, signInFail)

router.use('/users', authenticated, users)
router.use('/tweets', authenticated, tweets)
router.use('/followships', authenticated, followships)
router.use('/admin', authenticated, authenticatedAdmin, admin)

module.exports = router
