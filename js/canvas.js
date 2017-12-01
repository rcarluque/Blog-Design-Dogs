var contexto;

window.onload = function(){
  var ancho = window.innerWidth - 120;
  var alto = window.innerHeight - 20;

  let contexto = cargaContextoCanvas("canvas", ancho, alto);
  if (contexto) {
    draw(contexto, ancho, alto);
  }
}

/* Método para escuchar cuando cambia la ventana de tamaño.
Da problemas porque empieza a pintarlo una vez tras otra.

window.onresize = function() {
  let ancho = window.innerWidth - 120;
  let alto = window.innerHeight - 20;

  let contexto = cargaContextoCanvas("canvas", ancho, alto);
  if (contexto) {
    draw(contexto, ancho, alto);
  }
}; 

*/

function cargaContextoCanvas(idCanvas, wi, he) {
  let elemento = document.getElementById(idCanvas);
  if(elemento && elemento.getContext) {
    elemento.width  = wi;
    elemento.height = he;
    let contexto = elemento.getContext('2d');
    if (contexto) {
      return contexto;
    }
  }
  return FALSE;
}

function draw(contexto, wi, he) {
  let imgPerro = new Image();
  imgPerro.src = "img/bulldog.png";

  let x = 0;
  let y = 0;

  setInterval(function() {
    // Movemos la imagen sumando i
    x++;
    // Cuando la x sea igual al maximo, reiniciamos
    if (x == wi) x = 0;
    contexto.clearRect(0, 0, wi, he);
    contexto.drawImage(imgPerro, x, y, 130, 130);
  }, 1000/850);
}