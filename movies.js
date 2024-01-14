const movies = [
    { title: 'Top Gun', genre: 'Action', releaseYear: 1986 },
    { title: 'Mission: Impossible', genre: 'Action', releaseYear: 1996 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Mist', genre: 'Drama', releaseYear: 2007 },
    { title: 'Joker', genre: 'Drama', releaseYear: 2019 },
    { title: 'Accepted', genre: 'Comedy', releaseYear: 2006 },
    { title: 'Nobody', genre: 'Action', releaseYear: 2021 },
    { title: 'Ted', genre: 'Comedy', releaseYear: 2012 },
    { title: 'Get Hard', genre: 'Comedy', releaseYear: 2015 },
];

function getRecommendations() {
    const genre = document.getElementById('genre').value;
    const recommendations = movies.filter(movie => movie.genre === genre);
    displayRecommendations(recommendations);
}

function displayRecommendations(recommendations) {
    const movieListContainer = document.getElementById('movie-list');
    movieListContainer.innerHTML = '';

    if (recommendations.length === 0) {
        movieListContainer.innerHTML = '<p>No recommendations available for selected genre.</p>';
    } else {
        recommendations.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Release Year: ${movie.releaseYear}</p>
            `;
            movieListContainer.appendChild(movieCard);
        });
    }
}