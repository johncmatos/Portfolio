// select all buttons and cards

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .rwcard");

// Define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //Iterate over each filterable card
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card initially
        card.classList.add("hide");
        // Check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");   
        }
    });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

//other
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})