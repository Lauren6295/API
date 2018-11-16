/**
 * Obtiene una lista (parcial) de personajes de Rick and Morty.
 *
 */

// Crea el request.
const input = document.querySelector('input[type="search"]');
const request = new XMLHttpRequest();
const listaPersonajes = document.getElementById('lista-personajes');
// Registra el manejador de eventos.
request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  console.log(response);
  input.addEventListener('change', function(event) {
    for (const i of response.results) {
      if (i.name.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
        let elementLi = document.createElement('LI');
        listaPersonajes.appendChild(elementLi);
        let name = document.createElement('h2');
        name.innerText = i.name;
        elementLi.appendChild(name);
        name = document.createElement('p');
        name.innerText ='Status: ' + i.status;
        elementLi.appendChild(name);
        let imgPerson = document.createElement('IMG');
        imgPerson.setAttribute('src', i.image);
        elementLi.appendChild(imgPerson);
      }

    }
  });
});
// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', 'https://rickandmortyapi.com/api/character');

// Envía el request.
request.send();
