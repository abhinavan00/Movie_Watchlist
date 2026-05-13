const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchBtn.addEventListener('click', async function() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&s=${searchInput.value}`)
    const data = await res.json()

    for await(const item of data.Search) {
        const fetchImbd = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&i=${item.imdbID}`)
        const imdbData = await fetchImbd.json()
        console.log(imdbData)
    }

    
    
    // const fetchImdbDetail = await fetch(`http://www.omdbapi.com/?apikey=2825a6ba&i=${data.Search[0].imdbID}`)
    // const imdbData = await fetchImdbDetail.json()
    // console.log(imdbData)
})