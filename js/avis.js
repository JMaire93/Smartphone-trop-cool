let avis = [
    {
        text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin1",
        date: 1756725906,
    },
    {
        text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin2",
        date: 1756725906,
    },
    {
        text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin3",
        date: 1756725906,
    }
]

const container = document.getElementById("avis-container");
const template = document.getElementById("avis-template");

function updateAvis() {
    container.innerHTML = ""
    avis.sort((a, b) => b.date - a.date)
        .slice(0, 3)
        .forEach(avi => {
            // console.log(avi)
            const clone = template.content.cloneNode(true);
            clone.querySelector("p:first-child").textContent = avi.text;
            clone.querySelector("p:last-child").textContent = avi.author;
            container.appendChild(clone);
        });
}
updateAvis()

const popup = document.getElementById('popup')

const btnAvis = document.getElementById("btnAvis")
btnAvis.addEventListener("click", () => {
    popup.classList.remove('hidden')
})

const btnPopupClose = document.getElementById("btnPopupClose")
btnPopupClose.addEventListener("click", () => {
    popup.classList.add('hidden')
})

const btnPopupSubmit = document.getElementById("btnPopupSubmit")
const popupText = document.getElementById("popupText")
btnPopupSubmit.addEventListener("click", () => {
    avis.push({ text: popupText.value, author: "Jean Kevin", date: Date.now() })
    updateAvis()
    popup.classList.add('hidden')
})

