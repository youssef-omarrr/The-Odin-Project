const container = document.querySelector("#container");
const default_block = "background: white; border: 1px solid; height: 40px; width:40px;"
const hovered_block = "background: black; border: 1px solid; height: 40px; width:40px;"

let x = 16;
let y = 16;
fill_board(x, y);
drawable();

const done = document.querySelector("#done");
done.addEventListener("click", () => {
    clear_board();
    let x_input = document.getElementById("col").value;
    let y_input = document.getElementById("row").value;

    // Use the values or default to 16
    x = x_input ? x_input : 16;
    y = y_input ? y_input : 16;

    // You can now use x and y here to create the grid, for example:
    console.log(`Cols: ${x}, Rows: ${y}`);

    // Optionally, you can add a max value check (e.g., 16 cols/rows max)
    if (x > 16) x = 16;
    if (y > 16) y = 16;

    fill_board(x, y);
    drawable();
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", clear_board)


function drawable() {
    const divs = document.querySelectorAll(".div");
    divs.forEach((block) => {
        block.addEventListener("mouseover", () => {
            let random_block = `background: ${getRandomColor()}; border: 1px solid; height: 40px; width:40px;`
            block.style.cssText = random_block
        });
        block.addEventListener("mouseout", () => {
            // Returns to default after 1 second
            setTimeout(() => {
                block.style.cssText = default_block;
            }, 1000);
        });
    });
}


function fill_board(x, y) {
    // Update the board layout
    container.style.width = `${x * 42 +20}px`; // 40px + 2px (border) for each cell
    container.style.height = `${y * 42 +20}px`; // 40px + 2px (border) for each cell
    
    for (i = 0; i < x; i++) {
        for (j = 0; j < y; j++) {
            let div = document.createElement("div");
            div.classList.add(`div`);
            div.style.cssText = default_block
            // div.textContent = `${i}, ${j}`;
            container.appendChild(div);
        }
    }
}

function clear_board() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function getRandomColor() {
    // Generates a random pastel color
    return `hsl(${Math.random() * 360}, 100%, 75%)`;
}

