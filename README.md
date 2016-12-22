# township-cookie

helpers for using cookies with township

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/township-cookie.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/township-cookie
[travis-image]: https://img.shields.io/travis/sethvincent/township-cookie.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/township-cookie
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

If your use case requires you to store the JWTs that township creates in cookies rather than localstorage or similar, this module can help.

## Install

```sh
npm install --save township-cookie
```

## Usage

```js
var townshipCookie = require('township-cookie')

var cookies = townshipCookie({
  name: 'example',
  hostname: 'example.com'
})

// set a cookie with a JWT token on a response object
cookies.set(res, token)

// get a token from a cookie on a request object
var token = cookies.get(req)

// remove a cookie from a response object
cookies.remove(req)
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all, particularly for folks that are historically underrepresented in technology. Read this project's [code of conduct](CONDUCT.md)

## License

[ISC](LICENSE.md)
