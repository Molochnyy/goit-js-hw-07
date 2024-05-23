"use strict";

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('All form fields must be filled in')
    }
    const userDetails = { email: email.value, Password: password.value }

    console.log(userDetails)
    event.currentTarget.reset()
}
