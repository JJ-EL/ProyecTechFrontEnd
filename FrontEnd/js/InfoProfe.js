const API_URL = "http://localhost:3001/profesores";

document.addEventListener("DOMContentLoaded",()=>{
    cargaUsu();
})

async function cargaUsu(){
    try {
        const respuesta = await fetch(API_URL, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        const usu = await respuesta.json()
        VerUsuarios(usu);
    } catch (error) {
        console.log("Error al traer los registros de usuarios: ", error)
    }
}

function VerUsuarios(usu){
    const verEnTabla = document.getElementById("InfoUsu");

    usu.forEach((usu)=>{
        const TrUsuario = document.createElement("tr");
        TrUsuario.innerHTML = `
            <td>${usu.id}</td>
            <td>${usu.username}</td>
        `;
        verEnTabla.appendChild(TrUsuario);
    })
}
