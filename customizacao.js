document.addEventListener('DOMContentLoaded', function(event) { 

  	alert('Preencha o nome corretamente');
  	var bg = document.getElementById('inpnomeDoSolicitante').style.backgroundColor = 'red';
  	
  	var campoNomeSolicitante = document.getElementById('inpnomeDoSolicitante');

  	campoNomeSolicitante.addEventListener('input', function() {
    	campoNomeSolicitante.style.backgroundColor = '';
  	});

  campoNomeSolicitante.addEventListener('blur', function() {
    if (campoNomeSolicitante.value === '') {
      campoNomeSolicitante.style.backgroundColor = 'red';
    }
  });
  
  
});