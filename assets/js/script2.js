const btn2 = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn2.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tta754w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn2.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});