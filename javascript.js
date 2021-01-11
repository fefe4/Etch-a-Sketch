let gridwidth = 16;
let gridheight = 16;

for (i=0; i< gridwidth * gridheight; i++) {
  const cuadradoGrande = document.querySelector('#cuadradoGrande');
  const lesserGrid = document.createElement ('div');
  lesserGrid.classList.add("cuadradoChico")
  cuadradoGrande.appendChild(lesserGrid);
};
div.addEventListener("mouseover", function (e){
  e.classList.add ("cambiodecolor")
});


//how to make the little squares appear like a grid?
