import { login } from '../api/todo.js';

const form = document.getElementById('login-form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    console.log('logging in');
    await login(email, password);
    console.log('loged in');
    //window.location.href = '/client/index.html';
  } catch (error) {
    console.error(error);
    errorMessage.textContent = 'Invalid email or password. Please try again.';
  }
});