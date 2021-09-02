import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { initSortable } from './plugins/init_sortable';
import { initSelect2 } from './plugins/init_select2';
import { movieSearch, onSearch } from './movies';

// Stimulus setup
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

initSortable();
initSelect2();

// Search immediately as the page loads!
movieSearch("the matrix");

// Movie search form
const searchForm = document.querySelector('#movie-search');
// Handle 'submit' event on the movie search form
searchForm.addEventListener('submit', onSearch);


// Button click handling

// const button = document.querySelector('#click-me');
// button.addEventListener('click', (event) => {
//   const clickedButton = event.currentTarget;
//   clickedButton.innerText = 'Please wait...';
//   clickedButton.setAttribute('disabled', '');
// });
