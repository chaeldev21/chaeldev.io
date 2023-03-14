const form  = document.querySelector('.signup-from');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const  confirmpassword = document.querySelector('#extpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();
const confirmpassword = confirmpassword.value.trim();

if(name === '' || email === '' || password === '' || confirmpassword === ''){
        alert('Please fill out in the all field.');
} else if( password !== confirmpassword)
{
       alert('Password do not match');
} else  { 
    alert('Form submitted successful')
    form.reset();
}
});
const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
});
