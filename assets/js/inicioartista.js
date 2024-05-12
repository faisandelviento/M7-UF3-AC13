window.onload = function() {
    document.querySelector('#alta').onclick = altaArtista;
};

function altaArtista(){
    let idartista = document.querySelector('#idartista').value.trim();
    let nombre = document.querySelector('#nombre').value.trim();
    let nacionalidad = document.querySelector('#nacionalidad').value.trim();
    let servicio = 'servicios/controllers/artistacontroller.php';  

    let datos = new FormData();
        datos.append('peticion', 'A')
        datos.append('nombre', nombre);
        datos.append('nacionalidad', nacionalidad);
    
    
    let parametros = {
        method: 'post',
        body: datos,
    }
    //hacemos solicitus fetch
    fetch(servicio, parametros) 
    .then(mensaje=>{
        if (!mensaje.ok){
            throw new Error('La conexion pudo completarse correctamente.'+ mensaje.status);
        }
        return mensaje.json();
    })
    .then(data => {
        // Manejar la respuesta JSON recibida del servidor
        let codigo = data.codigo;
        let datosRespuesta = data.datos;
        let error = data.error;
        if (codigo === '00') {
            document.querySelector('#formulario').reset();
            document.querySelector('#modificar').setAttribute('disabled', true)
            document.querySelector('#baja').setAttribute('disabled', true)
            //intuyo que hay que poner los datos respuesta pero ns
            consultaArtista(datosRespuesta);
        }
    })

}


// function altaArtista(){
//     let idartista = document.querySelector('#idartista').value.trim();
//     let nombre = document.querySelector('#nombre').value.trim();
//     let nacionalidad = document.querySelector('#nacionalidad').value.trim();
//     let servicio = 'servicios/controllers/artistacontroller.php';
//     let datos = new FormData();
//     datos.append('peticion', 'A')
//     datos.append('nombre', nombre);
//     datos.append('nacionalidad', nacionalidad);
    
//     let parametros = {
//         method: 'POST', // Método HTTP POST para enviar datos
//         body: datos // Datos a enviar en la solicitud
//     };

//     // Realizar la solicitud fetch
//     fetch(servicio, parametros)
//     .then(response => {
//         // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
//         if (!response.ok) {
//             throw new Error('La solicitud ha fallado con código ' + response.status);
//         }
//         // Devolver el cuerpo de la respuesta como texto
//         return response.text();
//     })
//     .then(texto => {
//         // Imprimir el texto de la respuesta para depuración
//         console.log('Respuesta recibida:', texto);

//         // Intentar parsear el texto como JSON
//         try {
//             const mensaje = JSON.parse(texto);
//             let codigo = mensaje.codigo;
//             let datos = mensaje.datos;
//             let error = mensaje.error;

//             // Ejemplo de cómo manejar los datos según el código recibido
//             if (codigo === 99) {
//                 // Éxito en la operación
//                 console.log('Datos:', datos);
//             } else {
//                 // Error en la operación
//                 console.error('Error:', error);
//             }
//         } catch (error) {
//             throw new Error('Error al parsear la respuesta como JSON: ' + error.message);
//         }
//     })
//     .catch(error => {
//         // Capturar y manejar errores
//         console.error('Error en la solicitud fetch:', error);
//     });

// }

