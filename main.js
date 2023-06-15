let image = document.querySelector("img")
let title = document.querySelector("h1")
let button = document.querySelector("button")
let ul = document.querySelector("ul")


console.log(ul)

const getMeme = async ()=>{

let request = await fetch("https://meme-api.com/gimme/wholesomememes")
let data = await request.json()
console.log(request)

let memes = document.createElement("img")
memes.setAttribute("src",data.url)

ul.appendChild(memes)
console.log(data.url)





}
button.addEventListener("click",getMeme)