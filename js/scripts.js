// Validar el formulario
const inputs = document.querySelectorAll('form .campo input');

// console.log(inputs);

// Listener a los inputs
inputs.forEach(input =>{
	input.addEventListener('blur', validarInput);
});

inputs.forEach(input =>{
	input.addEventListener('input', validarInput);
});

function validarInput(e){
	// console.log(e.target.value);
	const estado = ['valido', 'no-valido'];

	let clase;
	if (e.target.value.length === 0) {
		clase = estado[1];
	}else{
		clase = estado[0];
	}
	// console.log(clase);

	e.target.classList.remove(...estado);
	e.target.nextElementSibling.classList.remove(...estado);

	e.target.classList.add(clase);
	e.target.nextElementSibling.classList.add(clase);

	// Inyectar dinámicamente el div con el error
	if (clase === 'no-valido') {
		
		if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
			// Construir un mensaje de error
			const errorDiv = document.createElement('div');
			errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
			errorDiv.classList.add('alerta');

			// Insertar el error
			e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
		}

	}else{
		// Limpiar el mensaje de error si existe
		if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
			e.target.parentElement.nextElementSibling.remove();
		}

	}
}

// Mostrar y ocultar Password
const mostrarPasswordBtn = document.querySelector('form .campo span');
// console.log(mostrarPasswordBtn);
mostrarPasswordBtn.addEventListener('click', e => {
	const passwordInput = document.querySelector('#password');

	if (e.target.classList.contains('mostrar')) {
		// Mostrar el texto
		e.target.classList.remove('mostrar');

		// Cambiar el texto
		e.target.textContent = 'Ocultar';

		// Cambiamos a password
		passwordInput.type = 'text';

	}else{
		// Mostrar el password
		e.target.classList.add('mostrar');

		// Cambiar el texto
		e.target.textContent = 'Mostrar';

		// Cambiamos a password
		passwordInput.type = 'password';
	}

})