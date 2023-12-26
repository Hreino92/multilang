// obtenemos el id flags del html
const flagsElement = document.getElementById("flags");

// Seleccionamos las etiquetas que tienen el atributo data-section
const textToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language => {
    // Leemos el json con el lenguaje al que damos clic
    const requestJson = await fetch(`../assets/js/languages/${language}.json`);

    // el resultado lo almacenamos en texts
    const texts = await requestJson.json();
    console.log(texts);

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
