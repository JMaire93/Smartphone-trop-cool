// recup de la div dans l'index
const div = document.getElementById("price")
// initialisation du prix de base de l'article et de tous ses additifs
const basePrice = 300
let colorPrice = 0 
    capacityPrice = 0 
    premiumPrice = 0
    garanteePrice = 0 
    accessoriesPrice = 0
//affichage du prix initial
const showPrice = document.createElement("div")
showPrice.textContent = `${basePrice} euro`
//fonction permettant de calculer le prix appelée à chaque changement des options
function calculatePrice() {
    return basePrice + colorPrice + capacityPrice + premiumPrice + garanteePrice + accessoriesPrice
}

                                        // PARTIE CHOIX DE COULEUR

//création d'un outil de sélection de la couleur
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

//fonction associant chaque couleur à son coup supplémentaire
function colorAddPrice(color) {
switch (color) {
    case 'black': return 0 
        break;
    case 'white': return 20   
        break;
    case 'pink': return 5        
        break;
    default:
        break;
}
}

//évènement sur le changement dans le selecteur pour changer la valeur du prix de l'article ainsi que son affichage
color.addEventListener('change',(e)=>{
    e.preventDefault()
    colorPrice = colorAddPrice(color.value)
    showPrice.textContent = calculatePrice() + ' euro'
}) 


                                        // PARTIE CHOIX DE CAPACITE DE STOCKAGE

//création d'un outil de sélection de la capacité
const capacity = document.createElement("select")
    const cap64 = document.createElement("option")
    cap64.value = "64"
    cap64.text = "64 Go"
    const cap128 = document.createElement("option")
    cap128.value = "128"
    cap128.text = "128 Go"
    capacity.add(cap64)
    capacity.add(cap128)

//fonction associant chaque capacité à son coup supplémentaire
function capacityAddPrice(capacity) {
switch (capacity) {
    case '64': return 0
        break;
    case '128': return 60   
        break;
    default:
        break;
}
}

//évènement sur le changement dans le selecteur pour changer la valeur du prix de l'article ainsi que son affichage
capacity.addEventListener('change',(e)=>{
    e.preventDefault()
    capacityPrice = capacityAddPrice(capacity.value)
    showPrice.textContent = calculatePrice() + ' euro'
}) 


                                        // PARTIE OPTION PREMIUM

//création d'une checkbox pour l'état premium 
const premium = document.createElement("input")
premium.type = "checkbox"

//évènement sur le changement de la checkbox pour ajouter ou non le prix premium à l'article et changer son affichage
premium.addEventListener('change',(e)=>{
    e.preventDefault()
    premiumPrice = (premium.checked)? 50 : 0
    showPrice.textContent = calculatePrice() + ' euro'
})


                                        // PARTIE EXTENSION DE GARANTIE

//création d'un outil de sélection de la durée de l'extension de garantie
const garantee = document.createElement("select")
const add6months = document.createElement("option")
add6months.value = "6 months"
add6months.text = "6 months"
const add1year = document.createElement("option")
add1year.value = "1 year"
add1year.text = "1 year"
const add2year = document.createElement("option")
add2year.value = "2 year"
add2year.text = "2 year"
const add5year = document.createElement("option")
add5year.value = "5 year"
add5year.text = "5 year"
garantee.add(add6months)
garantee.add(add1year)
garantee.add(add2year)
garantee.add(add5year)

//fonction associant chaque extension à son coup supplémentaire
function garanteeAddPrice(garantee) {
    switch (garantee) {
        case '6 months': return 5
        break;
        case '1 year': return 8   
        break;
        case '2 year': return 15  
        break;
        case '5 year': return 30   
        break;
        default:
            break;
        }
    }
    
    //évènement sur le changement dans le selecteur pour changer la valeur du prix de l'article ainsi que son affichage
    garantee.addEventListener('change',(e)=>{
        e.preventDefault()
        garanteePrice = garanteeAddPrice(garantee.value)
        showPrice.textContent = calculatePrice() + ' euro'
    }) 
    

                                            // PARTIE ACCESSOIRES
    //création d'un tableau pour générer des checkbox pour chaque élément via un foreach
    const accesories = [
        {
            name : 'coque de protection',
            price : 25
        },
        {
            name : 'écran de protection',
            price : 12
        },
        {
            name : 'autocollant trop cool',
            price : 5
        },
        {
            name : 'perche à selfie',
            price : 20
        },
        {   
            name : 'cordon antivol',
            price : 15
        }
    ]
    //div qui va contenir les checkbox accessoires
    const accesoriesDiv = document.createElement('div')
    //bouclage sur le tableau pour générer des combinaisons label + checkbox 
    accesories.forEach(accesory => {
        const label = document.createElement('label')
        label.textContent = accesory.name
        label.name = `${accesory.name}Label`
        const input = document.createElement('input')
        input.type = 'checkbox'
        input.name = `${accesory.name}Input`
        accesoriesDiv.append(label, input)
    //event sur chaque checkbox pour ajouter ou enlever le prix de l'accesoire (ce qui fait office de reset pour cet accessoire seulement)
        input.addEventListener('change', (e)=>{
            accessoriesPrice += (input.checked)? accesory.price : - accesory.price
            showPrice.textContent = calculatePrice() + ' euro'
        })
    })


    //ajout des éléments liés au prix de l'article dans la division récupérée initialement dans le HTML
    div.append(showPrice, color, capacity, premium, garantee, accesoriesDiv)
