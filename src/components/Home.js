import React, { useState } from 'react';
import { 
    SEARCH_BASE_URL,
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE 
} from '../config';


// Import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import MovieCarousel from './elements/MovieCarousel';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hooks
import { useHomeFetch } from './hooks/useHomeFetch';
import { useMovieSearchFetch } from './hooks/useMovieSearchFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
    const [{ 
        state: {movies, currentPage, heroImage}, 
        error
    }, fetchMovies] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const [{ 
        stateSearch: {moviesSearch}, 
        loadinigSearch,
    }, fetchSearch] = useMovieSearchFetch();

    const searchMovies = search => {
        const endPoint = search && SEARCH_BASE_URL + search;     
        
        setSearchTerm(search);
        fetchSearch(endPoint);
    }
    
    const loadMoreMovies = () => {
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1 }`;
        const endPoint = searchTerm && searchEndPoint ;
        fetchSearch(endPoint);
    }

    if (error) return <div>Something went wrong... </div>;
    if (!movies[0]) return <Spinner/>

    return (
        <>
            {!searchTerm && (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}
            <MovieCarousel movies={movies}/>
            <SearchBar callback={searchMovies}/>
            <Grid header={searchTerm && 'Search Result'}>
                {searchTerm &&  moviesSearch.map((movie) => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ?  IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    /> 
                ))
            }
            </Grid>
            {loadinigSearch && <Spinner />}
            { searchTerm && <LoadMoreBtn text='Load More' callback={loadMoreMovies} /> }
        </>
    );
}

export default Home;