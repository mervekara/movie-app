import React from 'react';
import { 
    IMAGE_BASE_URL, 
    POSTER_SIZE 
} from '../../config';


// Import Components
import MovieCarouselThumb from './MovieCarouselThumb';
import NoImage from '../images/no_image.jpg';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 20
  }
};

const MovieCarousel = ( { movies }) => {
    return (
      <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          >
          {
              movies.map((movie) => (
                  <MovieCarouselThumb
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
          </Carousel>
    );
}

export default MovieCarousel;