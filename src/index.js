import { initSortable } from './plugins/init_sortable';
import { initSelect2 } from './plugins/init_select2';
import { movieSearch, onSearch } from './movies';

initSortable();
initSelect2();

// Search immediately as the page loads!
movieSearch("the matrix");

// Movie search form
const searchForm = document.querySelector('#movie-search');
// Handle 'submit' event on the movie search form
searchForm.addEventListener('submit', onSearch);
