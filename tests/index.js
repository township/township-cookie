var test = require('tape')
var townshipCookie = require('../index')

test('set cookie', function (t) {
  var cookie = townshipCookie({ hostname: 'http://example.com' })
  var res = {
    setHeader: () => {}
  }

  var expected = 'township_access_token=token; path=/; domain=http://example.com; HttpOnly'
  var header = cookie.set(res, { token: 'token' })
  t.ok(header, expected)
  t.end()
})

test('set cookie', function (t) {
  var cookie = townshipCookie({ hostname: 'http://example.com' })
  var req = {
    headers: {
      cookie: 'township_access_token=token; path=/; domain=http://example.com; HttpOnly'
    }
  }

  var expected = 'township_access_token=token; path=/; domain=http://example.com; HttpOnly'
  var header = cookie.get(req)
  t.ok(header, expected)
  t.end()
})

test('remove cookie', function (t) {
  var cookie = townshipCookie({ hostname: 'http://example.com' })
  var res = {
    setHeader: () => {}
  }

  var expected = 'township_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  var header = cookie.remove(res)
  t.ok(header, expected)
  t.end()
})
