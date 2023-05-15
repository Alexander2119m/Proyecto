const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevenir el envío del formulario
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  if (username === 'Admin' && password === 'a1234') {
    window.location.href = 'ad.html'; // redirigir al administrador 
  } else if (username === 'estudiante' && password === '123') {
    window.location.href = 'inicio.html'; // redirigir al cuualquier estudiante
  } else {
    alert('Usuario o contraseña incorrectos'); // mostrar mensaje de error para los demás usuarios
  }
});
  