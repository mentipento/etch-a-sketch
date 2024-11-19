function createDivs(x) {

for (let i = 0; i < x**2; i++) {
    const container = document.querySelector("#container");
    let square = document.createElement("div");
    square.style.cssText = `flex: 1 0 calc(100%/${x})`;
    container.appendChild(square);
}
}
let x = 20;
createDivs(x);