function comprar() { 
    let timerInterval
Swal.fire({
  title: 'Espere unos segundos!',
  html: 'Tiempo restante <b></b> milisegundos.',
  timer: 2000,
  timerProgressBar: true,
  willOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    // console.log('I was closed by the timer')
  }
})
}

function bienvenida() { 
    Swal.fire({
  title: 'Hola',
  text: 'Espero hayas tenido una experiencia INCREIBLE! Por el momento no esta funcional esta opcion de contacto pero puedes contactarme por otros medios los cuales estan en esta misma pagina, EXITOS Y BENDICIONES!',
  imageUrl: 'images/CEO.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
}

function reportes() { 
    Swal.fire({
  title: 'Hola',
  text: 'Si tienes algun tipo de problema o simplemente necesitas otro libro encantado te ayudo, Escribeme a cualquiera de mis medios sociales y estare gustoso de ATENDERTE!',
  imageUrl: 'images/CEO.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  footer:'<a href="https://api.whatsapp.com/send?phone=+593961341616&text=Necesito Ayuda" target="_blank">Escribir a WhatsApp</a>'
})
}

function vistas() { 
  
}