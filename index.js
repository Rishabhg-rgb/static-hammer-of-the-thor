    var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
   (function(){
      emailjs.init("rPXdaATiPbmbuZFte");
   })();
   emailjs.send('brothersar111@gmail.com', 'template_tuoszg2', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });