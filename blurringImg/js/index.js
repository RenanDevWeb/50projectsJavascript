const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.background')


let load = 0 

let interval =  setInterval(blurring , 30)

function blurring(){
    load++
    
    if(load > 99){
        clearInterval(interval)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0,100,1,0)

    background.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (numberOfCalc , in_minimunNuber , in_MaxNumber, out_MinimunNumber, out_maxNumber) => {
     return (numberOfCalc -in_minimunNuber) * (out_maxNumber - out_MinimunNumber) / (in_MaxNumber - in_minimunNuber) + out_MinimunNumber
}