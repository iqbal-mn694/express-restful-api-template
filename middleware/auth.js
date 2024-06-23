exports.auth = (req, res, next) => {
  let isAuthenticated = true;
  if(isAuthenticated) {
    next()
  }
}