// module.exports = function (role) {
//   return function (req, res, next) {

//we check that the role is good
// if (req.decodedJwt.role !== role) {
module.exports = (role) => (req, res, next) => {
  if (req.decodedJwt.role !== role) {
    next({
      status: 403,
      message: "you have no power here!",
    });
  } else {
    next();
  }
};
