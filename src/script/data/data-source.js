import axios from "axios";

class DataSource {
  static searchMovie(keyword) {
    const getKeyword = keyword.toString();
    const restrictedPattern = /[^a-zA-Z,]/g;
    const searchKeyword = getKeyword.replace(restrictedPattern, '');
    if (searchKeyword !== "") {
      return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c84e9235f54b3a9a643e5107e70c5572&language=en-US&query=${searchKeyword}&page=1&include_adult=false`)
        .then(
          ({data}) => {
            if (data.results) {
              return Promise.resolve(data.results);
            } else {
              return Promise.reject(`${searchKeyword} is not found`);
            }
          }
        );
    } else {
      return Promise.reject(`Please insert a movie name`);
    }
  }

  static searchTrending() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c84e9235f54b3a9a643e5107e70c5572`)
      .then(
        ({data}) => {
          if (data.results) {
            return Promise.resolve(data.results);
          } else {
            return Promise.reject(`is not found`);
          }
        }
      )
  }
}

export default DataSource;
