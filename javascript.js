
function removeGrid() {               //loop through child elements of the grid and delete until nothing left
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
};

function createGrid(gridSize){
    for (i =0; i < (gridSize*gridSize); i++) {          //16x16 grid
        var gridItem = document.createElement("div");     //select the div element 
        gridItemWidth = (100/gridSize);
        gridItem.style.flex = `1 0 calc(${gridItemWidth}% - 2px`;
        gridItem.className = "grid-item";
        document.getElementById('grid').appendChild(gridItem);  //add gridItem to grid in html actually
        gridItem.addEventListener('mouseenter',function() {
            this.style.backgroundColor = getRandomColor();
        }
        );
    };
} ;       

function askNewGrid(){
    var userInput = prompt("What grid size do you want (less than a hundred)");
    var userNumber = parseInt(userInput);
    if (userNumber >100) {
        return;
    }
    if (!isNaN(userNumber)) {
        gridSize = userNumber;
        removeGrid();
        createGrid(gridSize);
        return userNumber;
    } else {
    console.log("You did not enter a valid number.");
    return null;  
    }
};

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);   // Random red
    var green = Math.floor(Math.random() * 256); // Random green
    var blue = Math.floor(Math.random() * 256);  // Random blue
    return `rgb(${red}, ${green}, ${blue})`;     // Return RGB color string
};

gridSize = 16;
createGrid(gridSize);
var newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click',askNewGrid);


