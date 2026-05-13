const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchBtn.addEventListener('click', async function() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&s=${searchInput.value}`)
    const data = await res.json()
    console.log(data.Search[0].imdbID)
    
    // const fetchImdbDetail = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&i=${data.Search[0].imdbID}`)
    // const imdbData = await fetchImdbDetail.json()
    // console.log(imdbData)
})