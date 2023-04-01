import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import "bootstrap/dist/css/bootstrap.min.css";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = () => {
    searching(searchElement.value);
  };

  const searching = async (keyword) => {
    try {
      const result = await DataSource.searchMovie(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const searchingTrendingMovie = async () => {
    try {
      const result = await DataSource.searchTrendingMovie();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchingTrendingMovie();

  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };
  
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;