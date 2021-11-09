const jwt = require('jsonwebtoken')

module.exports = function buildToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, 'shhh', options)
}
