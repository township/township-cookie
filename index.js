var cookie = require('cookie-cutter')

module.exports = function townshipCookie (config) {
  var config.name = config.name || 'township'
  var config.hostname = config.hostname

  function setCookie (res, options) {
    var token = options.token
    var hostname = options.hostname
    res.setHeader('Set-Cookie', config.name + '_access_token=' + token + '; ' + 'path=/; domain=' + hostname + '; HttpOnly')
  }

  function getCoookie (req) {
    if (req.headers.cookie) {
      return cookie(req.headers.cookie).get(config.name + '_access_token')
    }
  }

  function removeCookie (res) {
    res.setHeader('Set-Cookie', config.name + '_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
  }

  return {
    set: setCookie,
    get: getCoookie,
    remove: removeCookie
  }
}
