import {authenticateWithGoogle,
  goToRegister,
  authenticateWithEmailAndPassword,
  authenticateFacebook} from './view_controller.js';

document.getElementById('button-google').addEventListener('click', authenticateWithGoogle);
document.getElementById('btnSignUp').addEventListener('click', goToRegister);
document.getElementById('btnLogIn').addEventListener('click', authenticateWithEmailAndPassword);
document.getElementById('button-facebook').addEventListener('click', authenticateFacebook);


