function populateGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    //1fr repeats 1 fraction of available space (600px)//
    //whatever size variable is input a fraction is repeated//
    //whatever size grid is created//

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    //16x16 (256) div's are created//
    //when mouse hovers over a white div, it's background colour changes//
    //to black//

    square.style.backgroundColor = "grey";
    grid.insertAdjacentElement("beforeend", square);
    //'square' div's placed right after the previous div with 'beforeend'//
    //onto grid div//
    }
}

populateGrid(16);

const changeGridSize = document.querySelector("button");

changeGridSize.addEventListener('click', () => {
    const userInput = Number(window.prompt("How many squares per side would you like?"))
    populateGrid(userInput);
})
