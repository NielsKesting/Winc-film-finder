// Filters
const newMoviesList = movies.filter(movie => movie.year >= 2014)
const avengersMoviesList = movies.filter(movie => movie.title.includes('Avenger'))
const xMenMoviesList = movies.filter(movie => movie.title.includes('X-Men'))
const princessMoviesList = movies.filter(movie => movie.title.includes('Princess'))
const batmanMoviesList = movies.filter(movie => movie.title.includes('Batman'))

// Functions
const removeMoviesFromDom = function () {
    let movieList = document.getElementById('movieWall').getElementsByTagName('ul')[0]
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild)
    }
}

const addMoviesToDom = function (movieArray) {
    let posterLinks = movieArray.map((info) => { return info.poster })
    let movieList = document.getElementById('movieWall').getElementsByTagName('ul')[0]

    posterLinks.forEach((poster) => {
        const addMovie = document.createElement('img')
        addMovie.src = poster
        movieList.appendChild(addMovie)
    })
}

const resetRadio = function () {
    const allButtons = document.getElementsByName('filterButton')
    allButtons.forEach((button) => { button.checked = false })

    const allMoviesButton = document.getElementById('allMovies')
    allMoviesButton.checked = true;
}

const movieSwap = function () {
    removeMoviesFromDom();
    switch (activeButton) {
        case 'allMovies':
            addMoviesToDom(movies);
            break;
        case 'newMovies':
            addMoviesToDom(newMoviesList);
            break;
        case 'avengers':
            addMoviesToDom(avengersMoviesList);
            break;
        case 'xMen':
            addMoviesToDom(xMenMoviesList);
            break;
        case 'princess':
            addMoviesToDom(princessMoviesList);
            break;
        case 'batman':
            addMoviesToDom(batmanMoviesList);
            break;
    }
}

// Listeners
window.onload = () => {
    resetRadio()
    addMoviesToDom(movies)
}

let activeButton
const filterButtons = document.getElementsByName('filterButton')
filterButtons.forEach((button) => {
    button.addEventListener(('change'), () => {
        if (button.checked) {
            activeButton = button.value
        }
    })
})

document.getElementById('filterButtons').addEventListener(('change'), () => {
    movieSwap()
})