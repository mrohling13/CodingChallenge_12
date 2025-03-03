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

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll(".metric-card");

// converting it into an array
const metricCardsArray = [...metricCards];

// updating each cards inner text
metricCardsArray.forEach(card => {
  card.innerText += ' - Updated';
  card.style.backgroundColor = 'orange'; // Adding a background color
});


