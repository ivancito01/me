//funcion que me aplica el etilo en el menu a la opcion seleccionada y quita la previamente seleccionada
function seleccionar(link){
    var opciones =document.querySelectorAll('#links  a');
    opciones[0].calssName="";
    opciones[1].calssName="";
    opciones[2].calssName="";
    opciones[3].calssName="";
    opciones[4].calssName="";
    link.className="seleccionado";
    var x =document.getElementById("nav");
    x.className = "";
}
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav")
    if(x.className===""){
        x.className="responsive";
    }else{
        x.className="";
    }
}
//animacion de scrollin para las barras de habilidades
window.onscroll = function(){efectoHabilidades()};
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("py").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("html").classList.add("barra-progreso3")
        document.getElementById("c++").classList.add("barra-progreso4")
    }
}

