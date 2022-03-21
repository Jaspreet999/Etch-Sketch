let mouse = false
let color = "red"

const btn = document.getElementById('btn')
let container = document.getElementById("container")
const remove = document.getElementById('delete')
const eraser = document.getElementById('eraser')
const paint = document.getElementById('paint')

alert("please use grid size less than 50!")

btn.addEventListener('click', () =>{
    container.innerHTML = ''
    setUpGrid(document.getElementById('inputText').value)
})

remove.addEventListener('click', ()=>{
    container.innerHTML = ''
    setUpGrid(document.getElementById('inputText').value)
})

eraser.addEventListener('click', ()=>{
    
    color = "lightblue"
      
})

paint.addEventListener('click',()=>{
    mouse = false
    color = "red"
})


container.addEventListener('mousedown',()=>(
    mouse = true
))

container.addEventListener('mouseup',()=>(
    mouse = false
))



function changeColor(element){
    if(mouse == true){
        element.target.style.backgroundColor = color
    }
}

function setUpGrid(size) {
    
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    
    for(let i=1;i<=size*size;i++){

        const div = document.createElement('div')
        div.classList.add('griditem')
        div.style.border = '0.1px solid white'
        div.style.margin ='0px'
        div.addEventListener('mouseover',changeColor)
        container.append(div)
        
    }    
}


