document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('form')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    let email = document.querySelector('#email')
    if (email.value == '') {
      errorContainer.classList.add('visible')
      email.classList.remove('success')
      let err = document.createElement('li')
      err.innerText = "Le champ email ne peut pas être vide"
      errorList.appendChild(err)
    } else {
      email.classList.add('success')
    }

    let pseudo = document.querySelector('#pseudo')
    if (pseudo.value.length < 6) {
      errorContainer.classList.add('visible')
      pseudo.classList.remove('success')
      let err = document.createElement('li')
      err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
      errorList.appendChild(err)
    } else {
      pseudo.classList.add('success')
    }

    let password = document.querySelector('#password')
    let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{10,}$/;
    if (password.value.length < 10 || !passCheck.test(password.value)) {
      errorContainer.classList.add('visible')
      password.classList.remove('success')
      let err = document.createElement('li')
      err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"
      errorList.appendChild(err)
    } else {
      password.classList.add('success')
    }

    let passwordRepeat = document.querySelector('#password2')
    if (password.value !== passwordRepeat.value) {
      errorContainer.classList.add('visible')
      passwordRepeat.classList.remove('success')
      let err = document.createElement('li')
      err.innerText = "Les mots de passe sont différents"
      errorList.appendChild(err)
    } else {
      passwordRepeat.classList.add('success')
    }

    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if (pseudo.classList.contains('success') &&
      email.classList.contains('success') &&
      password.classList.contains('success') &&
      passwordRepeat.classList.contains('success')) {
      successContainer.classList.add('visible')
    }
  });
});

function switchDarkMode() {
  var body = document.getElementsByTagName("body")[0];
  var header = document.getElementsByTagName("header")[0];
  var footer = document.getElementsByTagName("header")[0];
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    header.classList.remove("dark");
    footer.classList.remove("dark");
  } else {
    body.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
  }
}
