const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', function(event) {
  // Prevenimos que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Seleccionamos los campos del formulario
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const email = document.querySelector('#email');
  const cedula = document.querySelector('#cedula');

  // Validamos que los campos estén llenos
  if (username.value === '' || password.value === '' || email.value === '' || cedula.value === '') {
    alert('Por favor llene todos los campos');
    return;
  }

  // Validamos el formato del correo electrónico
  const emailRegex = /^[^\s@]+@(live\.uleam\.edu\.ec)$/;
  if (!emailRegex.test(email.value)) {
    alert('Por favor ingrese un correo electrónico válido (@live.uleam.edu.ec)');
    return;
  }

  // Validamos que el número de cédula sea numérico y tenga 10 dígitos
  if (isNaN(cedula.value) || cedula.value.length !== 10) {
    alert('Por favor ingrese un número de cédula válido');
    return;
  }

  // Validamos si el correo electrónico ya existe
  // Aquí suponemos que ya tenemos una lista de correos electrónicos registrados en algún lado
  const correosRegistrados = ['e1315498525@live.uleam.edu.ec', 'e1315498523@live.uleam.edu.ec', 'correo3@example.com'];
  if (correosRegistrados.includes(email.value)) {
    alert('El correo electrónico ya está registrado');
    return;
  }

  // Validamos que la contraseña tenga como mínimo 8 caracteres
  if (password.value.length < 8) {
    alert('La contraseña debe tener como mínimo 8 caracteres');
    return;
  }

  // Si llegamos aquí es porque todos los campos están llenos y los valores son válidos
  alert('Registro exitoso!');
});




