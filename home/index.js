const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const movieListContainer = document.getElementById('movie-list-container')

searchBtn.addEventListener('click', async function() {
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&s=${searchInput.value}`)
        const data = await res.json()
        try{
            const htmlData = data.Search.map(async (item) => {
                    const imdbFetch = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&i=${item.imdbID}`)
                    const imdbData = await imdbFetch.json()

                    return `
                        <div class="movie-card">
                                <img src="${imdbData.Poster}" alt="${imdbData.Title}" class="movie-poster">
                                <div class="movie-details-container">
                                    <div class="movie-header">
                                        <p class="title">${imdbData.Title}</p>
                                        <p class="rating">&#11088 ${imdbData.imdbRating}</p>
                                    </div>
                                    <div class="movie-detail">
                                        <p>${imdbData.Runtime}</p>
                                        <p>${imdbData.Genre}</p>
                                        <button class="watchlist-btn">
                                            <img src="../images/plus-icon.svg" alt="plus icon">
                                            Watchlist
                                        </button>
                                    </div>
                                    <p class="about-movie">
                                        ${imdbData.Plot}
                                    </p>
                                </div>
                            </div>
                            <hr>
                    `
                
                })

                const html = await Promise.all(htmlData)
                movieListContainer.innerHTML = html

        } catch(err) {
            console.log('Some Error Found during the fetch!')
        }

    } catch(err) {
        console.log('Sorry! Unable find the movie.')
        // console.log(err)
    }

        
})
