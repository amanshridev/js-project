console.log("working")

let selectedNodes = document.querySelectorAll('.button')
let body = document.querySelector('body')

// console.log(selectedNodes)

selectedNodes.forEach( function selectButton(button){
    button.style.listStyleType = "none"
    button.addEventListener("click", function (e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
    })
})