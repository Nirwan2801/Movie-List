import axios from "axios";

class DataSource {
  static searchTrendingMovie() {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c84e9235f54b3a9a643e5107e70c5572&language=en-US&page=1`)
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
  
  static searchMovie(keyword) {
    const getKeyword = keyword.toString();
    const pattern = /[^a-zA-Z,]/g;
    const searchKeyword = getKeyword.replace(pattern, '');
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
      return this.searchTrendingMovie()
    }
  }

}

export default DataSource;
