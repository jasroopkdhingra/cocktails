document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars');
    
    // Adjust the number of stars based on your preference
    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
      createStar();
    }
    
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
   
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDuration = 2 + Math.random() * 4 + 's'; 
      star.style.animationDelay = Math.random() * 2 + 's'; 
      
      starsContainer.appendChild(star);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('preference-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedPreferences = Array.from(document.querySelectorAll('input[name="flavor"]:checked')).map(el => el.value);
    const queryParams = new URLSearchParams({ q: selectedPreferences.join(',') });

    fetch(`/cocktail?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        updateCocktailDisplay(data);
      })
      .catch(error => console.error('Error fetching cocktail data:', error));
  });
});

function updateCocktailDisplay(cocktails) {
  const recipesDiv = document.getElementById('recipes');
  // Empty the current content
  recipesDiv.innerHTML = '';
  // Populate with new content based on the cocktail data
}