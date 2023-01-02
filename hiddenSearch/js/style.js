const searchButton =  document.querySelector('.search')
const button =  document.querySelector('.btn')
const input =  document.querySelector('.input')

button.addEventListener('click',() => {
    searchButton.classList.toggle('active');
    input.focus()
})

input.addEventListener('mouseleave',() => {
    searchButton.classList.remove('active');
    input.focus()
})