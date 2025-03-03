// Task 1 
const dashboardId = document.getElementById("dashboard"); // id
const dashboardQuery = document. querySelector("dashboard"); // querySelector

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

