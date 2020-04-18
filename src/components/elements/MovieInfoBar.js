import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { calcTime, splitYear } from '../../helpers';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';


const MovieInfoBar = ({ time, year}) => (
    <StyledMovieInfoBar>
        <div className="movieinfobar-content">
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-time" name="clock-o" size="2x" />
                <span className="movieinfobar-info">
                    Running time: { calcTime(time) }
                </span>
            </div>

            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-hourglass" name="clock-o" size="2x" />
                <span className="movieinfobar-info">
                    Year: { splitYear(year) }
                </span>
            </div>
        </div>
    </StyledMovieInfoBar>
)

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    year: PropTypes.string
}

export default MovieInfoBar;