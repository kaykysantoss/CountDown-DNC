const dia = document.getElementById('dia')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamneto = "17 oct 2023"

function countDown() {
    const dataLanc = new Date(lancamneto)
    const hoje = new Date() 

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = finalSegundos
}

function formatoTempo( tempo ) {
    return tempo  < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)