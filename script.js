function createDivs(x = 16) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    for (let i = 0; i < x ** 2; i++) {
        let square = document.createElement("div");
        square.style.cssText = `flex: 1 0 calc(100% / ${x});`;
        container.appendChild(square);
    }
}

createDivs();

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    let input = Number(prompt("Please input an integer number between 2 and 100", "16"));

    if (input > 100 || input < 2 || !Number.isInteger(input)) {
        alert("Please enter an integer between 2 and 100");
        createDivs();
    } else {
        createDivs(input);
    }
});