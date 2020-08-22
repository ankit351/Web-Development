// used in 50
let divelem = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if (val == null){
 text = document.createTextNode('This is my element clickto edit it');
}
else{
    text = document.createTextNode(val);
}
divelem.appendChild(text);
divelem.setAttribute('id','elem');
divelem.setAttribute('class','elem');
divelem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');


let container = document.querySelector('.container');
let first = document.getElementById('myfirst');
container.insertBefore(divelem,first)



// console.log(divelem)

console.log(divelem, container,first)
// add event 
divelem.addEventListener('click', function(){
    let notextarea = document.getElementsByClassName('textarea').length;
    if(notextarea == 0){
    let html = elem.innerHTML;
    divelem.innerHTML = `<textarea class="textarea" id="textarea" rows="3"> ${html} </textarea>`
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
});