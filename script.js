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
// Sample notification count (replace with actual notification count)
var notificationCount = 5; // Example: 5 new songs

// Update notification badge count
document.getElementById("notificationBadge").textContent = notificationCount;

// Add event listener for notification button click
document.getElementById("notificationBtn").addEventListener("click", function() {
    // Handle notification click event
    alert("You have " + notificationCount + " new songs!");
});
// Sample music data (replace with actual music data)
var musicData = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" }
];

var currentSongIndex = 0; // Index of the currently playing song

// Function to play the current song
function playSong() {
    var currentSong = musicData[currentSongIndex];
    alert("Playing: " + currentSong.title + " - " + currentSong.artist);
}

// Add event listener for play button click
document.getElementById("playButton").addEventListener("click", playSong);

// Function to play the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicData.length; // Wrap around to the beginning if at the end
    playSong();
}

// Add event listener for next button click
document.getElementById("nextButton").addEventListener("click", nextSong);

// Function to play the previous song
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + musicData.length) % musicData.length; // Wrap around to the end if at the beginning
    playSong();
}

// Add event listener for previous button click
document.getElementById("previousButton").addEventListener("click", previousSong);
// Sample events data (replace with actual events data)
var eventsData = [
    { title: "Concert: Artist 1", date: "2024-04-25", venue: "Venue A", location: "City A" },
    { title: "Festival: Artist 2", date: "2024-05-10", venue: "Venue B", location: "City B" },
    { title: "Live Performance: Artist 3", date: "2024-06-15", venue: "Venue C", location: "City C" },
    // Add more events as needed
];

// Function to display events
function displayEvents() {
    var eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = ""; // Clear previous content

    eventsData.forEach(function(eventItem) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("event-item");
        itemDiv.innerHTML = `
            <strong>${eventItem.title}</strong><br>
            <span><strong>Date:</strong> ${eventItem.date}</span><br>
            <span><strong>Venue:</strong> ${eventItem.venue}</span><br>
            <span><strong>Location:</strong> ${eventItem.location}</span>
        `;
        eventsList.appendChild(itemDiv);
    });
}

// Call the displayEvents function when the page loads
window.onload = function() {
    displayEvents();
};







