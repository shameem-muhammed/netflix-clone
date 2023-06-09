const key = "84978fd752c50f59c9499f0987a2b212";

export const imageUrl = "https://image.tmdb.org/t/p/original/"

export const requests = {
    requestNewReleases: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=4`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTvShow: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=Horror&with_watch_monetization_types=flatrate`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestMovie: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestHero: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`,

    requestTvLatest: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    requestTvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestOnlyonNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_providers=Netflix&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

};
