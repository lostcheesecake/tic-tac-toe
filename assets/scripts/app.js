'use strict'
const store = require('./store.js')
const events = require('./books/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.cell').on('click', function () {
    if (store.user === 'X') {
      store.user = 'O'
    } else {
      store.user = 'X'
    }
    $(this).text(store.user)
    console.log(store.user)
  })
})

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
})
