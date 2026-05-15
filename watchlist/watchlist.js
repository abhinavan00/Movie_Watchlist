// Import list arr 
import { list } from "./list.js";

// Get movie list arr from localStorage
const movieList = JSON.parse(localStorage.getItem('MovieList'))

// DOM Elements
const watchListInitialState = document.getElementById('watchlist-initial-state')
const movieListContainer = document.getElementById('movie-list-container')

console.log(movieList)