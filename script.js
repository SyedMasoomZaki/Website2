document.addEventListener("DOMContentLoaded", function () {
    const therapistList = document.getElementById("therapist-list");
    const searchBar = document.getElementById("searchBar");
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    
    // Therapist Data (AI can populate this dynamically later)
    const therapists = [
        { name: "Grace Mills", specialty: "Cognitive Behavioral Therapy", image: "images/grace-mills.jpg" },
        { name: "Ella Stone", specialty: "Mindfulness Meditation", image: "images/ella-stone.jpg" },
        { name: "Harper Lane", specialty: "Art Therapy", image: "images/harper-lane.jpg" },
        { name: "Skye Adams", specialty: "Family Counseling", image: "images/skye-adams.jpg" },
        { name: "Phoenix Reed", specialty: "Group Therapy", image: "images/phoenix-reed.jpg" }
    ];
    
    function loadTherapists() {
        therapistList.innerHTML = "";
        therapists.forEach(therapist => {
            const therapistCard = document.createElement("div");
            therapistCard.classList.add("therapist-card");
            therapistCard.innerHTML = `
                <img class="therapist-img" src="${therapist.image}" alt="${therapist.name}">
                <div class="therapist-info">
                    <h3>${therapist.name}</h3>
                    <p>${therapist.specialty}</p>
                    <button class="btn btn-primary" onclick="bookAppointment('${therapist.name}')">Book Session</button>
                </div>
            `;
            therapistList.appendChild(therapistCard);
        });
    }
    
    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();
        document.querySelectorAll(".therapist-card").forEach(card => {
            const name = card.querySelector("h3").textContent.toLowerCase();
            const specialty = card.querySelector("p").textContent.toLowerCase();
            card.style.display = (name.includes(searchTerm) || specialty.includes(searchTerm)) ? "block" : "none";
        });
    });
    
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    function bookAppointment(name) {
        alert(`Booking session with ${name}!`);
    }
    
    loadTherapists();
});
