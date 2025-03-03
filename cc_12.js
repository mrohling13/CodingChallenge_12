// Task 1 
const dashboardId = document.getElementById("dashboard"); // id
const dashboardQuery = document. querySelector("#dashboard"); // querySelector

// creating div element

const revenueCard = document.createElement("div"); // div element

// setting attributes 

revenueCard.setAttribute("class", "metric-card"); // class attribute
revenueCard.setAttribute("id", "revenue-card");  // id attribute


// popluating the card
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
  `;

  // appending new card
  dashboardId.appendChild(revenueCard);

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll(".metric-card");

// converting it into an array
const metricCardsArray = [...metricCards];

// updating each cards inner text
metricCardsArray.forEach(card => {
  card.innerText += ' - Updated';
  card.style.backgroundColor = 'green'; // Adding a background color
});


// Task 3: Dynamic Inventory Management – Adding and Removing Items

function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newProductItem = document.createElement("li");

    newProductItem.setAttribute("class", "product-item");
    newProductItem.setAttribute("data-product", productName);
    newProductItem.innerText = productName;

    // adding a click event that removes items 
    newProductItem.addEventListener("click", () => {
        removeProductItem(newProductItem);
    });

    inventoryList.appendChild(newProductItem);
};

// function for removing product items

function removeProductItem(item) {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(item);
};

// adding a event listener to the "add product" button
document.getElementById("addProductButton").addEventListener("click", () => {
    addProductItem("New Product");
})

// adding products as examples
addProductItem("Playstation 5");
addProductItem("Nintendo DS");

// Task 4: Business Customer Section – Handling Event Bubbling

const customerSection = document.getElementById("customerSection");
// adding a click event listner 
customerSection.addEventListener("click", () => {
    console.log("Has been selected");
});

const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
    card.style.backgroundColor = "blue";
    card.addEventListener("click", (event) => {
        console.log("Has been selected");
        event.stopPropagation();
    });
});
