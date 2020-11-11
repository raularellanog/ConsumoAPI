var boton=document.getElementById('boton');//obtener elemnto de htlm
var contenedor=document.getElementById('contenedor');//obtener elemnto de htlm
var datos=null;//variable donde se guardan lso datos 

boton.addEventListener('click',function(){//realizar una accion al hacer click
    alert('datos obtenidos');//verificar si entra a la función 
    fetch('https://jsonplaceholder.typicode.com/posts')//url de los datos 
    .then(data => data.json())//promesa
        /* .then(json => console.log(json)) */
        .then(json => {datos=json;//promesa
        verdatos(datos)//pasar datos obtenidos 
    })
});
function verdatos(datos){ //función para obtener   
    datos.map((dato,i)=> {//iterar en los datos obtenidos 
        let titulo=document.createElement('h2');//crear un elemeto para colocar h2
        let contenido=document.createElement('p');//crear un elemento pataa colocar p 
        titulo.innerHTML=i+'-'+dato.title;//en el elemento h2 colocar el dato del atributo title 
        contenido.innerHTML=dato.body;//en el elemento h2 colocar el dato del atributo body
        contenedor.appendChild(titulo);//colocar elemento creado el el contenedor 
        contenedor.appendChild(contenido);//colocar elemento creado el el contenedor
    })
}