const div = document.getElementById("price")

const showPrice = document.createElement("div")

price.textContent = "38 euro"

const color = document.createElement("select")
    const black = document.createElement("option")
    black.value = "black"
    black.text = "noir"
    const white = document.createElement("option")
    white.value = "white"
    white.text = "blanc"
    const pink = document.createElement("option")
    pink.value = "pink"
    pink.text = "rose"
color.add(black)
color.add(white)
color.add(pink)

switch (color) {
    case 'black': 0        
        break;
    case 'white': 20        
        break;

    default:
        break;
}

div.append(showPrice, color)

color.addEventListener('change',(e)=>{
    e.preventDefault()

}) 
console.log('a')