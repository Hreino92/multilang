// obtenemos el id flags del html
const flagsElement = document.getElementById("flags");

// Seleccionamos las etiquetas que tienen el atributo data-section
const textToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language => {
    // Leemos el json con el lenguaje al que damos clic
    const requestJson = await fetch(`../assets/js/languages/${language}.json`);

    // el resultado lo almacenamos en texts
    const texts = await requestJson.json();
    //console.log(texts);

    // recorremos los elementos del json
    for (const element of textToChange) {
        // asignamos el Section name (asi se ha definido en el html)
        const sectionName = element.dataset.section;
        // asignamos el value (asi se ha definido en el html)
        const valueKey = element.dataset.value; // Suponiendo que este es el nombre de la clave en el JSON


        // si ambos elementos coinciden con el json, se cambiara el html
        if (texts[sectionName] && texts[sectionName][valueKey]) {
            element.innerHTML = texts[sectionName][valueKey];
        }
    }
};



// Escucha el clic en cada bandera
flagsElement.addEventListener('click', (e) => {
    // console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language);
});



//Formulario tickets
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxr9tzu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Solicitar Cotización';
      alert('¡Cotización enviada!');
      window.location.href='/index.html';
    }, (err) => {
      btn.value = 'Solicitar Cotización';
      // alert(JSON.stringify(err));
      alert('Error. Intente nuevamente. / Try Again');
    });
});

// Mask-input
$(document).ready(function(){
  // Aplicar máscara al campo de texto con id 'phone'
  $('#phone').inputmask('(999) 9999-9999'); // Máscara para número de teléfono
  
});

//Mostrar dinamicamente
function displaysv() {
  const sv = document.getElementById("sv");
  const programs_list = document.getElementById("programs_list");

  // Verificar si programs_list está visible y ocultarlo si es necesario
  if (programs_list.style.display === "block") {
    programs_list.style.display = "none";
  }

  // Toggle entre mostrar y ocultar
  sv.style.display = (sv.style.display === "none") ? "block" : "none";
  if (sv.style.display === "block") {
    // Opción 1: Usando document.documentElement
    document.documentElement.scrollTop = sv.offsetTop;
  }
}
function display_programs(){
  const programs_list = document.getElementById("programs_list");
  programs_list.style.display = (programs_list.style.display === "none")? "block":"none";
  if (programs_list.style.display === "block") {
    // Opción 1: Usando document.documentElement
    document.documentElement.scrollTop = programs_list.offsetTop;
  }
}