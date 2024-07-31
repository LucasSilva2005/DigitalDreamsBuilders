document.getElementById('password').addEventListener('input', function () {
 var password = this.value
 var minLength = document.getElementById('minLength')
 var uppercase = document.getElementById('uppercase')
 var specialChar = document.getElementById('specialChar')

 if (password.length >= 8) {
  minLength.classList.add('valid')
 } else {
  minLength.classList.remove('valid')
 }

 if (/[A-Z]/.test(password)) {
  uppercase.classList.add('valid')
 } else {
  uppercase.classList.remove('valid')
 }

 if (/[!@#$%^&*(),.?":{}|<>_-]/.test(password)) {
  specialChar.classList.add('valid')
 } else {
  specialChar.classList.remove('valid')
 }
});
