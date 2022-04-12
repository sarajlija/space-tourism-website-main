/*
// Get the container element
var ulContainer = document.getElementById("ul-id");

// Get all buttons with class="btn" inside the container
var links = ulContainer.getElementsByClassName("nav-li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
       // e.preventDefault()
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}*/