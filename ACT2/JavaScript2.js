// Función para mostrar datos en formato tabular
const registrou = () => {
    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const ciudad = document.getElementById('ciudad').value;
    
    if (id && cedula && nombre && fecha && ciudad) {
        const tabla = `
            <h1 id="usuah1">Usuario registrado correctamente</h1>
            <table border="2" cellpadding="20" style="margin-top: 20px; width: 100%; text-align: center;">
                <tr>
                    <th>ID</th>
                    <th>Cédula</th>
                    <th>Nombre y Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Ciudad</th>
                </tr>
                <tr>
                    <td>${id}</td>
                    <td>${cedula}</td>
                    <td>${nombre}</td>
                    <td>${fecha}</td>
                    <td>${ciudad}</td>
                </tr>
            </table> `
        ;
        document.body.innerHTML = tabla;
    } else {
        alert("Complete todos los datos para el registro");
    }
};
document.getElementById('btnregistro').addEventListener('click', registrou);