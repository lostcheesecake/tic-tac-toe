'use strict'
const authEvents = require('./books/events')
const gameEvents = require('./game/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example'))

$(document).ready(function () {
  console.log('Running JavaScript.....')
  $('#board tr td').click('click', gameEvents.updateGame)
})

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
})
