function ClickLua(){
    document.getElementById('lua').classList.remove('none')
    document.getElementById('marte').classList.add('none')
    document.getElementById('europa').classList.add('none')
    document.getElementById('tita').classList.add('none')
}

function ClickMarte(){
    document.getElementById('lua').classList.add('none')
    document.getElementById('marte').classList.remove('none')
    document.getElementById('europa').classList.add('none')
    document.getElementById('tita').classList.add('none')
}

function ClickEuropa(){
    document.getElementById('lua').classList.add('none')
    document.getElementById('marte').classList.add('none')
    document.getElementById('europa').classList.remove('none')
    document.getElementById('tita').classList.add('none')
}

function ClickTita(){
    document.getElementById('lua').classList.add('none')
    document.getElementById('marte').classList.add('none')
    document.getElementById('europa').classList.add('none')
    document.getElementById('tita').classList.remove('none')
}
