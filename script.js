// script.js
document.getElementById("playButton").addEventListener("click", function() {
    alert("Playing music...");
    // You can add further functionality here, like playing an actual song
});
// script.js

/*
document.getElementById("playButton").addEventListener("click", function() {
    alert("Playing music...");
    // You can add further functionality here, like playing an a/p>
       // news.js


       */

// Function to fetch news from an API
function fetchNews() {
    fetch('https://api.example.com/news')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('newsContainer');
        // Clear previous content
        newsContainer.innerHTML = '';
        // Loop through the fetched news and articles
        data.forEach(newsItem => {
            // Create a new div for each news item
            const newsDiv = document.createElement('div');
            newsDiv.classList.add('news-item');
            // Populate the div with news content (title, description, etc.)
            newsDiv.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p>${newsItem.description}</p>
                <a href="${newsItem.url}" target="_blank">Read More</a>
            `;
            // Append the news item to the news container
            newsContainer.appendChild(newsDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });
}

// Call the fetchNews function when the page loads
window.onload = function() {
    fetchNews();
}
   // Modal functionality
var registerModal = document.getElementById("registrationModal");
var registerBtn = document.getElementById("registerBtn");
var registerClose = document.getElementsByClassName("close")[0];

registerBtn.onclick = function() {
    registerModal.style.display = "block";
}

registerClose.onclick = function() {
    registerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}


// Modal functionality
var shareModal = document.getElementById("shareModal");
var shareBtn = document.getElementById("shareBtn");
var shareClose = document.getElementsByClassName("close")[0];

shareBtn.onclick = function() {
    shareModal.style.display = "block";
}

shareClose.onclick = function() {
    shareModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == shareModal) {
        shareModal.style.display = "none";
    }
}
// Function to handle search functionality
function search() {
    var searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm !== "") {
        // Perform search operation
        alert("Searching for: " + searchTerm);
    } else {
        alert("Please enter a search term.");
    }
}

// Add event listener for click event on the search button
document.getElementById("searchButton").addEventListener("click", search);

// Add event listener for keyup event (Enter key) in the search input field
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

// Sample data for explore categories (replace with your actual data)
var exploreData = {
    genres: ["Rock", "Pop", "Hip Hop", "Jazz", "Electronic"],
    artists: ["Artist 1", "Artist 2", "Artist 3", "Artist 4", "Artist 5"],
    albums: ["Album 1", "Album 2", "Album 3", "Album 4", "Album 5"],
    playlists: ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 4", "Playlist 5"]
};

// Function to explore a category
function exploreCategory(category) {
    var exploreResults = document.getElementById("exploreResults");
    exploreResults.innerHTML = ""; // Clear previous results

    var categoryData = exploreData[category];
    if (categoryData) {
        categoryData.forEach(function(item) {
            var resultItem = document.createElement("div");
            resultItem.classList.add("explore-results-item");
            resultItem.textContent = item;
            exploreResults.appendChild(resultItem);
        });
    } else {
        exploreResults.textContent = "No data available for this category.";
    }
}







// Sample user data (replace with actual backend integration)
var userData = {
    username: "",
    email: ""
};

// Function to handle user registration
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var form = event.target;
    var username = form.elements["username"].value;
    var email = form.elements["email"].value;
    var password = form.elements["password"].value;

    // Sample validation (you can add more robust validation)
    if (username && email && password) {
        // Assuming successful registration
        userData.username = username;
        userData.email = email;
        showProfile();
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to show user profile
function showProfile() {
    var registrationForm = document.getElementById("registrationForm");
    var profile = document.getElementById("profile");
    var profileInfo = document.getElementById("profileInfo");

    registrationForm.classList.add("hidden");
    profile.classList.remove("hidden");

    profileInfo.innerHTML = `
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
    `;
}
