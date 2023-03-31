class MovieItem extends HTMLElement {
  set data(data) {
      this._data = data;
      console.log('movies :', this._data);
      this.render();
  }

  render() {
      this.innerHTML = `
      <style>
      .card {
          cursor: pointer;
          height: 600px;
          box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
          background-color: white;
          border-radius: 12px;
          margin-bottom: 50px;
      }

      .card-film img {
          height:400px;
          border-radius: 12px 12px 0 0;
      }
      
      .card-film img:hover {
          opacity: 0.7;
      }

      .data-info {
          margin-top:15px;
          font-weight: lighter;
          font-size:14px;
          padding: 0px 15px;
      }
      
      .data-info > h5 {
          font-weight: lighter;
          font-size:14px;
          height:30px;
      }
      
      .data-info > p {
          font-size:12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6; /* number of lines to show */
      }
      </style>

      <div class="col mb-4">
      <div class="card card-film">
          <img src="http://image.tmdb.org/t/p/w185/${this._data.poster_path}" class="card-img-top" alt="Empty">
          <div class="row data-info">
                  <h5 class="col-9">${this._data.original_title}</h5>
                  <h5 class="col-3">${this._data.vote_average}</h5>
          </div>
          <div class="row data-info">
                  <p class="col-12 card-title">${this._data.overview}</p>
          </div>
      </div>
      </div>
      `;
  }
}

customElements.define("movie-item", MovieItem);