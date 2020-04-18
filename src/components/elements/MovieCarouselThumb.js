import React  from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledMovieCarouselThumb } from '../styles/StyledMovieCarouselThumb';

const MovieCarouselThumb = ({image, movieId, clickable }) => {

    return (
        <StyledMovieCarouselThumb>
            {clickable ? (
                <Link to={`/${movieId}`}>
                <img className='clickable' src={image} alt='movieThumb'/>
                </Link>
                ) : (
                    <img src={image} alt='moviethumb' />
                )}
        </StyledMovieCarouselThumb>
   
    )
}

MovieCarouselThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default MovieCarouselThumb;