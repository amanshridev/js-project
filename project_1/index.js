console.log("working")

let selectedNodes = document.querySelectorAll('.button')
let body = document.querySelector('body')

let h1 = document.createElement('h1')
const addText = document.createTextNode("Color Changer")
h1.appendChild(addText)
body.style.textAlign = "center";
h1.style.fontSize = "25px";


document.body.appendChild(h1)

// console.log(selectedNodes)

selectedNodes.forEach( function selectButton(button){
    button.style.listStyleType = "none"
    button.style.cursor = "pointer"
    button.addEventListener("click", function (e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "#fff"
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "#fff"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "#fff"
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "#fff"
        }
    })
})
