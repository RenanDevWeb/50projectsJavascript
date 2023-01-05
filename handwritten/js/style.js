const textPhraseh1 = document.querySelector('h1')
const textPhraseh2 = document.querySelector('h2')




function writtenOnScreen(textFromPrase){
  const textArray =  textFromPrase.innerHTML.split('')
  textFromPrase.innerHTML = ''
textArray.forEach((letter, index) => {
    setTimeout(() => {
        textFromPrase.innerHTML += letter  
    }, index * 75)
});
}




writtenOnScreen(textPhraseh1)
setTimeout(() => {
    writtenOnScreen(textPhraseh2)
}, 1000);


