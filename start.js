document.addEventListener('DOMContentLoaded', function() {
    const planetData = {
        Mercury: {
            fact: "Mercury is the smallest planet in our solar system and has a surface temperature that can reach up to 800°F (430°C) during the day!",
            image: "mercury.png" // Replace with actual image path
        },
        Venus: {
            fact: "A day on Venus is longer than its year. Venus takes 243 Earth days to rotate once, but only 225 Earth days to complete one orbit of the Sun!",
            image: "venus.png" // Replace with actual image path
        },
        Earth: {
            fact: "Earth is the only planet known to support life, with 71% of its surface covered by water.",
            image: "earth.png" // Replace with actual image path
        },
        Mars: {
            fact: "Mars has the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles (22 km) high!",
            image: "mars.png" // Replace with actual image path
        },
        Jupiter: {
            fact: "Jupiter is so large that all the other planets in the solar system could fit inside it!",
            image: "jupiter.png" // Replace with actual image path
        },
        Saturn: {
            fact: "Saturn has the most spectacular ring system, with seven rings and several gaps and divisions between them.",
            image: "saturn.png" // Replace with actual image path
        },
        Uranus: {
            fact: "Uranus is unique because it rotates on its side, making it the only planet to do so!",
            image: "uranus.png" // Replace with actual image path
        },
        Neptune: {
            fact: "Neptune has the strongest winds in the solar system, with speeds reaching up to 1,200 miles per hour (2,000 km/h)!",
            image: "neptune.png" // Replace with actual image path
        }
    };

    const favoritePlanet = localStorage.getItem('favPlanet') || 'Earth'; // Fallback to Earth if no favorite is set
    const planetInfo = planetData[favoritePlanet];

    document.getElementById('planetName').textContent = favoritePlanet;
    document.getElementById('planetFact').textContent = planetInfo.fact;
    document.getElementById('planetImage').src = planetInfo.image;
});

function startQuiz() {
    window.location.href = 'quiz.html'; // Replace with your quiz page URL
}
