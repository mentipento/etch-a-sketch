function createDivs(x) {

for (let i = 0; i < x**2; i++) {
    const container = document.querySelector("#container");
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}
}
let x = 16;
createDivs(x);