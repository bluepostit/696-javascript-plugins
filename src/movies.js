const insertMovies = (movies) => {
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
};

const movieSearch = (searchTerm) => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      const movies = json.Search;
      console.log(`There are ${movies.length} movies found`);

      insertMovies(movies);
    });
};

const onSearch = (event) => {
  // Prevent page from reloading
  event.preventDefault();
  // Grab input from the form
  const searchTerm = event.currentTarget.querySelector('#keyword').value;
  console.log(`Search term: ${searchTerm}`);
  // Build a URL to search with that input
  // Fetch the URL
  // Show results in the page
  movieSearch(searchTerm);
};

export { movieSearch, onSearch };
