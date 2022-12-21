function opcao1(){
    document.getElementById('veiculo').classList.remove('none')
    document.getElementById('porto').classList.add('none')
    document.getElementById('capsula').classList.add('none')
}

function opcao2(){
    document.getElementById('veiculo').classList.add('none')
    document.getElementById('porto').classList.remove('none')
    document.getElementById('capsula').classList.add('none')
}

function opcao3(){
    document.getElementById('veiculo').classList.add('none')
    document.getElementById('porto').classList.add('none')
    document.getElementById('capsula').classList.remove('none')
}