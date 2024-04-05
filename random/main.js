'use strict';
let inp=document.querySelector('#inp')
let elem=document.querySelector('#elem')
inp.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        if (getRandomInt(1, 6) > this.value) {
            elem.innerHTML = 'kattaroq son kiriting'
        }
       else if (getRandomInt(1, 6) < this.value) {
            elem.innerHTML = 'kichikroq son kiritin'
        }
        else if (getRandomInt(1, 6) == this.value) {
            elem.innerHTML='topdingiz'
        }
        
    }
    inp.value=null
    
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



