
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnfechar = document.querySelector('.btn-fechar');

lupa.addEventlistener('click', ()=> {
    boxbuscar.classlist.add('ativar')
} )

btnfechar.addEventlistener('click', ()=> {
    boxbuscar.classlist.remove('ativar')
} )

<script> function search() { const input = document.getElementById('searchInput').value.toLowerCase(); const content = document.getElementById('content'); const paragraphs = content.getElementsByTagName('p'); for (let i = 0; i < paragraphs.length; i++) { let paragraphText = paragraphs[i].textContent.toLowerCase(); if (paragraphText.includes(input)) { paragraphs[i].classList.add('highlight'); } else { paragraphs[i].classList.remove('highlight'); } } } function clearSearch() { document.getElementById('searchInput').value = ''; const content = document.getElementById('content'); const paragraphs = content.getElementsByTagName('p'); for (let i = 0; i < paragraphs.length; i++) { paragraphs[i].classList.remove('highlight'); } } </script>