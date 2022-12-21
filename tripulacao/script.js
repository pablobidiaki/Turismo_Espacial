function opcao1(){
    document.getElementById('tripulante1').classList.remove('none')
    document.getElementById('tripulante2').classList.add('none')
    document.getElementById('tripulante3').classList.add('none')
    document.getElementById('tripulante4').classList.add('none')
}
function opcao2(){
    document.getElementById('tripulante1').classList.add('none')
    document.getElementById('tripulante2').classList.remove('none')
    document.getElementById('tripulante3').classList.add('none')
    document.getElementById('tripulante4').classList.add('none')
}
function opcao3(){
    document.getElementById('tripulante1').classList.add('none')
    document.getElementById('tripulante2').classList.add('none')
    document.getElementById('tripulante3').classList.remove('none')
    document.getElementById('tripulante4').classList.add('none')
}
function opcao4(){
    document.getElementById('tripulante1').classList.add('none')
    document.getElementById('tripulante2').classList.add('none')
    document.getElementById('tripulante3').classList.add('none')
    document.getElementById('tripulante4').classList.remove('none')
}