const selectSemestre = document.querySelector('#semestre');
const tituloSemestre = document.querySelector('#titulo-semestre');
		
	selectSemestre.addEventListener('change', () => {
		const semestreSeleccionado = selectSemestre.options[selectSemestre.selectedIndex].text;
        tituloSemestre.textContent = semestreSeleccionado;
		});
        
        const tablaHorario = document.getElementById("tabla-horario");

        // Función para agregar un nuevo registro a la tabla
        function agregarRegistro() {
            // Obtener los valores de las celdas de la nueva fila
            const semestre = "2do Semestre";
            const dia = "Miércoles";
            const hora = "10:00am - 12:00pm";
            const curso = "Estadística Aplicada";
            const profesor = "PHD. Ruiz González Oscar Luis";
            
            // Obtener la referencia a la tabla y a sus filas
            const tabla = document.getElementById("tabla-horario");
            const filas = tabla.getElementsByTagName("tr");
            
            // Comprobar si ya existe una fila con los mismos valores
            let filaExistente = false;
            for (let i = 1; i < filas.length; i++) { // Empezar en 1 para omitir la fila de encabezados
              const celdas = filas[i].getElementsByTagName("td");
              if (celdas[0].textContent === semestre && 
                  celdas[1].textContent === dia &&
                  celdas[2].textContent === hora &&
                  celdas[3].textContent === curso &&
                  celdas[4].textContent === profesor) {
                filaExistente = true;
                break;
              }
            }
            
            // Agregar la nueva fila o mostrar un mensaje de error
            if (filaExistente) {
              alert("Ya existe una fila con los mismos datos");
            } else {
              const nuevaFila = document.createElement("tr");
              const celdaSemestre = document.createElement("td");
              celdaSemestre.textContent = semestre;
              nuevaFila.appendChild(celdaSemestre);
              const celdaDia = document.createElement("td");
              celdaDia.textContent = dia;
              nuevaFila.appendChild(celdaDia);
              const celdaHora = document.createElement("td");
              celdaHora.textContent = hora;
              nuevaFila.appendChild(celdaHora);
              const celdaCurso = document.createElement("td");
              celdaCurso.textContent = curso;
              nuevaFila.appendChild(celdaCurso);
              const celdaProfesor = document.createElement("td");
              celdaProfesor.textContent = profesor;
              nuevaFila.appendChild(celdaProfesor);
              const celdaAcciones = document.createElement("td");
              celdaAcciones.innerHTML = '<button onclick="editarRegistro(this)">Editar</button><button onclick="eliminarRegistro(this)">Eliminar</button>';
              nuevaFila.appendChild(celdaAcciones);
              tabla.appendChild(nuevaFila);
            }
          }
          
          const botonEditar = document.createElement("button");
          botonEditar.textContent = "Editar";
          botonEditar.addEventListener("click", function () {
            editarRegistro(this);
          });
          acciones.appendChild(botonEditar);
        
          const botonEliminar = document.createElement("button");
          botonEliminar.textContent = "Eliminar";
          botonEliminar.addEventListener("click", function () {
            eliminarRegistro(this);
          });
          acciones.appendChild(botonEliminar);
        
          nuevaFila.appendChild(acciones);
        
          // Agregar la nueva fila al tbody
          tablaHorario.appendChild(nuevaFila);
        
        
        // Función para editar un registro existente
        function editarRegistro(botonEditar) {
          const fila = botonEditar.parentNode.parentNode;
          const celdas = fila.getElementsByTagName("td");
        
          // Obtener los valores actuales de la fila
          const semestreActual = celdas[1].textContent;
          const diaActual = celdas[2].textContent;
          const horaActual = celdas[3].textContent;
          const cursoActual = celdas[4].textContent;
          const profesorActual = celdas[5].textContent;
        
          // Pedir al usuario los nuevos valores
          const semestreNuevo = prompt("Ingrese el nuevo semestre:", semestreActual);
          const diaNuevo = prompt("Ingrese el nuevo día:", diaActual);
          const horaNueva = prompt("Ingrese la nueva hora:", horaActual);
          const cursoNuevo = prompt("Ingrese el nuevo curso:", cursoActual);
          const profesorNuevo = prompt("Ingrese el nuevo profesor:", profesorActual);
        
          // Actualizar los valores en la fila
          celdas[1].textContent = semestreNuevo;
          celdas[2].textContent = diaNuevo;
          celdas[3].textContent = horaNueva;
          celdas[4].textContent = cursoNuevo;
          celdas[5].textContent = profesorNuevo;  
        }
        
        // Función para eliminar un registro existente
        function eliminarRegistro(botonEliminar) {
          const fila = botonEliminar.parentNode.parentNode;
          fila.parentNode.removeChild(fila);
        }

        
        