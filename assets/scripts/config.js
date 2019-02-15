'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-wdi.herokuapp.com/',
  development: 'http://localhost:7165'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
