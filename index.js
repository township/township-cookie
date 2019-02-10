var cookie = require('cookie-cutter')

module.exports = function townshipCookie (config) {
  config.name = config.name || 'township'

  function setCookie (res, options) {
    var token = options.token
    var hostname = options.hostname || config.hostname
    var header = config.name + '_access_token=' + token + '; ' + 'path=/; domain=' + hostname + '; HttpOnly'
    res.setHeader('Set-Cookie', header)
    return header
  }

  function getCoookie (req) {
    if (req.headers.cookie) {
      return cookie(req.headers.cookie).get(config.name + '_access_token')
    }
  }

  function removeCookie (res) {
    var header = config.name + '_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    res.setHeader('Set-Cookie', header)
    return header
  }

  return {
    set: setCookie,
    get: getCoookie,
    remove: removeCookie
  }
}
