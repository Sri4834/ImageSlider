let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    let i=0;
    document.querySelector('.slide').appendChild(items[i++]);
})
prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length-1]);
})