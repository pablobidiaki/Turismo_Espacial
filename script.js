let contagem = 0 
function menuBurguer(){
    contagem += 1
    if(contagem%2 == 1){
        document.getElementById('opcoes').classList.remove('none')
        document.getElementById('fechar').classList.remove('none')
        document.getElementById('burguer').classList.add('none')
    }else{
        document.getElementById('opcoes').classList.add('none')
        document.getElementById('burguer').classList.remove('none')
        document.getElementById('fechar').classList.add('none')
    }
}