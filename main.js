document.querySelector('div.app ol').addEventListener('click', lineThrough)
document.querySelector('div.app ul').addEventListener('click', disappear)
//document.querySelector('div.app ul').addEventListener('click', lineThrough)


function lineThrough(event) {
event.target.style.textDecoration = 'line-through'
}
function disappear(event) {
    event.target.style.opacity = 0
}
// function lineThrough(event) {
//     event.target.style.textDecoration = 'line-through'
// }
