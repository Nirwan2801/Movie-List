class movieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        console.log(this._movie);
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .card {
            cursor: pointer;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            background-color: white;
            border-radius: 12px;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .card-movie img {
           
            border-radius: 12px 12px 0 0;
        }
        
        .card-movie img:hover {
            opacity: 0.8;
        }

        .movie-info {
            margin-top:15px;
            font-weight: lighter;
            font-size:14px;
            padding: 0px 15px;
        }
        
        .movie-info > h5 {
            font-weight: lighter;
            font-size:14px;
            height:30px;
        }
        
        .movie-info > p {
            font-size:12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6; /* number of lines to show */
        }
        </style>

        <div class="col mb-4">
        <div class="card card-movie">
            <img src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" class="card-img-top" alt="Empty">
            <div class="row movie-info">
                    <h5 class="col-9">${this._movie.original_title}</h5>
                    <h5 class="col-3">${this._movie.vote_average}</h5>
            </div>
            <div class="row movie-info">
                    <p class="col-12 card-title">${this._movie.overview}</p>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define("movie-item", movieItem);