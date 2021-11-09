const jwt = require('jsonwebtoken')

module.exports = function buildToken(user){
    return `faketoken for user ${user.id}`
}
