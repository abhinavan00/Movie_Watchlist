// MOVIE LIST ARRAY LOCAL STORAGE 
const movieList = JSON.parse(localStorage.getItem('MovieList'))

// DOM ELEMENTS
const watchListInitialState = document.getElementById('watchlist-initial-state')
const movieListContainer = document.getElementById('movie-list-container')

// EVENT LISTNERS
document.addEventListener('click', function(e) {
    if(e.target.dataset.id) {
        removeMovieFromWatchlist(e.target.dataset.id)
    }
})

// REMOVE MOIVE FROM WATCHLIST
function removeMovieFromWatchlist(movieId) {
    movieList.filter(movie => {
        if (movie.Id === movieId) {
            // FIND INDEX OF SELECTED MOVIE
            const index = movieList.indexOf(movie)

            // REMOVE SELECTED MOVIE FROM MOVIE ARRAY
            movieList.splice(index, 1)
            
            // SET NEW MOVIE ARRAY TO LOCALSTORAGE
            localStorage.setItem('MovieList', JSON.stringify(movieList))

            // GET NEW MOVIE ARRAY FROM LOCALSTORAGE
            const newMovieList = JSON.parse(localStorage.getItem('MovieList'))

            // CALL RENDER() WITH NEW MOVIE ARRAY
            render(newMovieList)
        }
    })
}

// GET MOVIE LIST
function getMovieList(movies) {
    const movieListHtml = movies.map(movie => {
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
                                            data-id ='${movie.Id}'
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
function render(movies) {
    if(movies.length) {
        watchListInitialState.style.display = 'none'
        movieListContainer.style.display = 'block'
        movieListContainer.innerHTML = getMovieList(movies)
    } else {
        movieListContainer.style.display = 'none'
        watchListInitialState.style.display = 'flex'
    }
}

render(movieList)

