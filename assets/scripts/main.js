const form = document.getElementById('signin-form');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const inputs = Array.from(document.querySelectorAll('input'));

// Lightweight validation feedback and floating label support.
inputs.forEach((input) => {
  input.addEventListener('blur', () => validateField(input));
});

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? 'Hide' : 'Show';
  passwordInput.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = inputs.every((input) => validateField(input));
  if (isValid) {
    form.classList.add('sent');
    alert('Signed in! (demo only)');
  }
});

function validateField(input) {
  const field = input.closest('.field');
  if (!field) return true;

  const valid = input.checkValidity();
  field.classList.toggle('invalid', !valid);
  return valid;
}
