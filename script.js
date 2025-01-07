
let boxBuscar = document.querySelector(".buscar-box");
let lupa = document.querySelector(".lupa-buscar");
let btnfechar = document.querySelector(".btn-fechar");

lupa.addEventlistener('click', ()=> {
    boxbuscar.classlist.add('ativar')
} )

btnFechar.addEventlistener('click', ()=> {
    boxBuscar.classlist.remove('ativar')
} )
