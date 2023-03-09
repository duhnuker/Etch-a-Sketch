function populateGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    //1fr repeats 1 fraction of available space (600px)//
    //whatever size variable is input a fraction is repeated//

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "grey";
        grid.insertAdjacentElement("beforeend", square);
    //populating a 16x16 (256) grid//
    //insertAdjacentElement places each fraction immediately after the
    //previous div in the grid div as set colour, this will be white//
    //but for testing may be grey//
    }
}

populateGrid(16);