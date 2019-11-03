const firstOlLi = document.querySelectorAll('ol li')
const firstUlLi = document.querySelectorAll('ul li')
const picRow = document.querySelectorAll('#row img')
const button = document.querySelector('#toggle')

for (let i = 0; i < firstOlLi.length; i++) {
    firstOlLi[i].addEventListener('click', olFunc);
}
function olFunc(element){
    element.target.style.textDecoration = 'line-through';
}


for (let i = 0; i < firstUlLi.length; i++) {
    firstUlLi[i].addEventListener('click', ulFunc);
}
function ulFunc(element){
    element.target.style.opacity = 0;
}

for (let i = 0; i < picRow.length; i++) {
    picRow[i].addEventListener('click', imgFunc);
}
function imgFunc(element){
    element.target.style.width = '0px';
}


button.addEventListener('click', extinction)

function extinction(){
    for(let i = 0; i < firstOlLi.length; i++) {
        firstOlLi[i].style.textDecoration = 'line-through';
    }

    for(let i = 0; i < firstUlLi.length; i++) {
        firstUlLi[i].style.opacity = 0;
    }

    for(let i = 0; i < picRow.length; i++){
        picRow[i].style.width = '0px';
    }
}



