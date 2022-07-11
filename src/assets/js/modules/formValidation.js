export default function formValidation() {

  document.querySelectorAll('form').forEach(form => {
    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const nameInput = form.querySelector('#name-input');
    const emailInput = form.querySelector('#email-input');

    nameInput.addEventListener('keyup', () => validateName(nameInput, nameError));
    emailInput.addEventListener('keyup', () => validateEmail(emailInput, emailError));

    form.addEventListener('submit', (e) => validateForm(e, validateName(nameInput, nameError), validateEmail(emailInput, emailError)));
  });

  function validateName(nameInput, nameError) {
    const name = nameInput.value;

    if (name.length == 0) {
      nameError.innerText = "Введіть ваше ім'я!";
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      return false;
    }
    if (!name.match(/^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ]*\s{1}[A-Za-zА-Яа-яёЁЇїІіЄєҐґ]*$/)) {
      nameError.innerText = "Введіть повне ім'я!";
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      return false;
    }
    nameError.innerText = '';
    nameInput.classList.add('valid');
    nameInput.classList.remove('invalid');
    return true;
  }

  function validateEmail(emailInput, emailError) {
    const email = emailInput.value;

    if (email.length == 0) {
      emailError.innerText = 'Введіть вашу електронну адресу';
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z\.]{2,}$/)) {
      emailError.innerText = 'Електронна адреса неправильна!';
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return false;
    }
    emailError.innerText = '';
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    return true;
    
  }

  function validateForm(event, input1, input2) {
    event.preventDefault();
    if (!input1 || !input2) {
      return false;
    }
    document.querySelectorAll('input').forEach(input => input.classList.remove('valid'));
  }

}