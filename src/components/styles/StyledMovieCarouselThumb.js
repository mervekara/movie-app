import styled from 'styled-components';

export const StyledMovieCarouselThumb = styled.div`
  img {
    width: 98%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;
