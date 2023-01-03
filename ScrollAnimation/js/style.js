

const boxes =  document.querySelectorAll('.box')

window.addEventListener('scroll' ,checkBox)

function checkBox(){
    const triggerButon = window.innerHeight / 5 *4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        boxTop < triggerButon ? box.classList.add('show') : box.classList.remove('show')

    })
}