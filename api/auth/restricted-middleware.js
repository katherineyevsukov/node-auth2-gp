const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../config')

module.exports = (req, res, next) => {
  //pull token from a header Authorization
  //check the token for validity
  //(recreate the signature) 
  const token = req.headers.authorization

  if (!token){
    return next({ status: 401, message: 'we wants token!'})
  }
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if(err){
      return next({
        status: 401,
        message: `bad tokenz: ${err.message}`
      })
    }

    req.decodedJwt = decoded
    console.log(decoded)
    next()
  })
};
