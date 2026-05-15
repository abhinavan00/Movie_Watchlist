// IMPORT MOVIE LIST
import { list } from "./list.js";

// MOVIE LIST ARRAY LOCAL STORAGE 
const movieList = JSON.parse(localStorage.getItem('MovieList'))

// DOM ELEMENTS
const watchListInitialState = document.getElementById('watchlist-initial-state')
const movieListContainer = document.getElementById('movie-list-container')

// GET MOVIE LIST
function getMovieList() {
    const movieListHtml = movieList.map(movie => {
        return `
            <div class="movie-card">
                                <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
                                <div class="movie-details-container">
                                    <div class="movie-header">
                                        <p class="title">${movie.Title}</p>
                                        <p class="rating">&#11088 ${movie.Rating}</p>
                                    </div>
                                    <div class="movie-detail">
                                        <p>${movie.Runtime}</p>
                                        <p>${movie.Genre}</p>
                                        <button 
                                            class="remove-btn" 
                                            id='remove-btn'
                                        >
                                            <img src="../images/minus-icon.svg" alt="plus icon">
                                            Remove
                                        </button>
                                    </div>
                                    <p class="about-movie">
                                        ${movie.Plot}
                                    </p>
                                </div>
                            </div>
                            <hr>
        `
    })

    return movieListHtml
}

// RENDER MOVIE LIST
function render() {
    if(movieList.length) {
        watchListInitialState.style.display = 'none'
        movieListContainer.innerHTML = getMovieList()
    }
}

render()

