'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onRestartGame = (event) => {
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)
  api.restartGame(formData)
    .then(ui.restartGameSuccess)
    .catch(ui.restartGameFailure)
}

const onSignUp = (event) => {
  console.log('onSignUp')
  event.preventDefault()

  const form = event.target
  console.log('form:', form)

  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form:', form)

  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form:', form)

  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onRestartGame
}
