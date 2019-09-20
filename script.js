// const container = document.querySelector('.container');
//         //Creates grid and creates black background with mouseover   
//             const boxes = (16*16);
//                 for(i=0; i<boxes; i++) {
//                     const squareDiv = document.createElement('div');
//                     squareDiv.classList.add("squares");
//                     container.appendChild(squareDiv);
//                     squareDiv.onmouseover = function(){squareDiv.style.backgroundColor = "black";};

//create grid 
const layoutGrid = (height, width) => {
    const container = document.querySelector('.container')
    container.style.gridTemplateColumns = `repeat(${width}, 20px)`
    container.style.gridTemplateRows = `repeat(${height}, 20px)`
    container.style.justifyContent = `center`
}

//fill grid with blocks
const fillGrid = (numOfBlocks, color) => {
    const container = document.querySelector('.container');
    const test = Array(numOfBlocks).keys()
            for (var i of test){
                let markup = `<div id="card ${i}" class= "squares"
                                   style="
                                          background-color: ${color};
                                          height: 20px;
                                          width: 100%;
                                          border: 1px black solid;"</div>`
                container.innerHTML += markup

                const divs = document.querySelectorAll(".squares");
                divs.forEach (div =>
                    div.addEventListener("mouseenter", function(e) {
                    e.target.style.backgroundColor = "black";
                }));
            };
}
layoutGrid(16, 16);
fillGrid(256, "white");




          