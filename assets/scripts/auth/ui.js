'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').show()
  $('#message').text(response.user.email + ' successfully signed up!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}

const onSignUpFailure = function (response) {
  $('#message').show()
  $('#message').text('Fail to sign up!')
  $('#message').removeClass()
  $('#message').addClass('fail-message')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully logged in!')
  $('#message').show()
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#client').show()
  $('#clientUpdate').show()
  $('#clientsButtonHide').show()
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}
const onSignInFailure = function (response) {
  $('#message').text('fail to log in!')
  $('#message').show()
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('change password!')
  $('#message').show()
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}
const onChangePasswordFailure = function (response) {
  $('#message').text('fail to change password!')
  $('#message').show()
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}
const onSignOutSuccess = function (response) {
  $('#message').text('signed out!')
  $('#message').show()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#change-password').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#client').hide()
  $('#clientUpdate').hide()
  $('#clientsButtonHide').hide()
  store.user = null
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
