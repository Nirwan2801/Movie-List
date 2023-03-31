
// import '../component/movie-list.js';
// import '../component/search-bar.js';
// import DataSource from '../data/data-source.js';

// const main = () => {
//   const searchElement = document.querySelector('search-bar');
//   const movieListElement = document.querySelector('movie-list');

//   const onButtonSearchClicked = () => {
//     searching(searchElement.value);
//   };

//   const searching = async (keyword) => {
//     try {
//       const result = await DataSource.searchMovie(keyword);
//       console.log('Searching:', result);
//       renderResult(result);
//     } catch (message) {
//       fallbackResult(message);
//     }
//   };



//   const searchingTrending = async () => {
//     try {
//       const result = await DataSource.searchTrending();
//       console.log("result:", result);
//       renderResult(result);
//     } catch (message) {
//       fallbackResult(message);
//     }
//   };
//   searchingTrending();

//   const renderResult = results => {
//     console.log('render result:', results);
//     movieListElement.movies = results;
//   };

//   const fallbackResult = message => {
//     console.log('message', message);
//     movieListElement.renderError(message);

//   };

//   searchElement.clickEvent = onButtonSearchClicked;
// };

// export default main;




import '../component/data-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const dataListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = () => {
    searching(searchElement.value);
  };

  const searching = async (keyword) => {
    try {
      const result = await DataSource.searchFilm(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const searchingTrending = async () => {
    try {
      const result = await DataSource.searchTrending();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };


  searchingTrending();

  const renderResult = results => {
    dataListElement.movies = results;
  };

  const fallbackResult = message => {
    dataListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;