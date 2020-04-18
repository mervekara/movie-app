import React from 'react';
import { Link } from '@reach/router';

import {
    StyledHeader,
    StyledLogo
} from '../styles/StyledHeader';

import RMDBLogo from '../images/logo-red.png';

const Header = () => (
    <StyledHeader>
        <div className='header-content'>
            <Link to="/">
            <StyledLogo src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
        </div>
    </StyledHeader>
)

export default Header;
