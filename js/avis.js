let avis = [
    {
        text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin",
        date: 1756725906,
    },
    {
        text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin",
        date: 1756725906,
    },
    {
        text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae distinctio obcaecati",
        author: "Jean Kevin",
        date: 1756725906,
    }
]

const container = document.getElementById("avis-container");
const template = document.getElementById("avis-template");

avis.forEach(avi => {
    console.log(avi)
    // const clone = template.content.cloneNode(true);
    // clone.querySelector("#text").textContent = avi.text;
    // clone.querySelector("#author").textContent = avi.author;
    // container.appendChild(clone);
});