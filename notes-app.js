// const p = document.querySelectorAll('p')

// p.forEach(function(p){
//  p.textContent= 'hakuna matata';
// })

const Append = document.createElement('P')
Append.textContent='THIS IS A NEW CONTENT';
document.querySelector('body').appendChild(Append);
