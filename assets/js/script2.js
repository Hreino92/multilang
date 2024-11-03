const btn2 = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn2.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tta754w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'Enviar Cotización';
      alert('Cotización enviada');
      this.reset(); // Limpia todos los campos del formulario
      window.location.href='/index.html';
    }, (err) => {
      btn2.value = 'Enviar Cotización';
      alert(JSON.stringify(err));
    });
});