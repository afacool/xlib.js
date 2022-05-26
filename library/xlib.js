import { add, } from "./xlibex.js"

console.log(add([400, 2, 2]));

let ver = "version: 0.0.1"
let description = "description: This is xlib.js which i made for community purposes only."
let author = "Author: Afan Sabovic"


console.log(ver  )
console.log(author  )
console.log(description  )


function $(selector)
{
    const self =
{
    element: document.querySelector(selector),
    html: ()=> self.element,
    on:(event, callback)=>{
        document.addEventListener(event,callback)
    }
}

return self
}



$('h1').on('click',function(){
    alert('Welcome to xlib.js')
})

