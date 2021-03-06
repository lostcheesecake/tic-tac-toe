'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up.')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in!')
  store.user = responseData.user
}

const signInFailure = () => {
  $('#user-message').text('Error on sign in.')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password!')
}

const changePasswordFailure = () => {
  $('#user-message').text('Error changing password.')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = () => {
  $('#user-message').text('Error signing out.')
}

const failure = () => {
  $('#user-message').text('Error, something went wrong.')
  $('form').trigger('reset')
}

const restartGameSuccess = () => {
  $('form').trigger('reset')
}

const restartGameFailure = () => {
  $('#user-message').text('Error restarting game.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  failure,
  restartGameSuccess,
  restartGameFailure
}
