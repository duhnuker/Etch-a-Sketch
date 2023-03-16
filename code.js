function populateGrid(size) {
    let grid = document.querySelector(".grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    //each time the grid is being populated it is completely removed first//
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    //1fr repeats 1 fraction of available space (600px)//
    //whatever size variable is input a fraction is repeated//
    //whatever size grid is created//

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
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
    let userInput = Number(window.prompt("How many squares per side would you like?"))
    while (userInput > 100) {
        alert("Please enter a value less than or equal to 100!");
        userInput = Number(window.prompt("How many squares per side would you like?"))
    }
    populateGrid(userInput);
})
