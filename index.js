document.getElementById("main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Alex Njugi Karanja is the champion";

document.body.append(newHeader);

// Step 1: Remove <main> element
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of newHeader
newHeader.id = "victory";

// Step 4: Set text content
newHeader.textContent = "Alex Njugi is the champion";

// Step 5: Append newHeader to the DOM
document.body.append(newHeader);
