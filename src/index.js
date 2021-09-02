const movieSearch = (searchTerm) => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      const movies = json.Search;
      console.log(`There are ${movies.length} movies found`);

      // First, clear the old results!
      const results = document.getElementById('results');
      results.innerHTML = '';

      movies.forEach((movie) => {
        const movieTag = `<li class="list-inline-item">
          <img src="${movie.Poster}" alt="${movie.Title}">
          <p>${movie.Title}</p>
        </li>`;
        results.insertAdjacentHTML('beforeend', movieTag);
      });
    });
};

// Search immediately as the page loads!
movieSearch("the matrix");


// Movie search form
const searchForm = document.querySelector('#movie-search');
// Handle 'submit' event on the movie search form
searchForm.addEventListener('submit', (event) => {
  // Prevent page from reloading
  event.preventDefault();
  // Grab input from the form
  const searchTerm = event.currentTarget.querySelector('#keyword').value;
  console.log(`Search term: ${searchTerm}`)
  // Build a URL to search with that input
  // Fetch the URL
  // Show results in the page
  movieSearch(searchTerm);
});
