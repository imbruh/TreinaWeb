import { Toolbar, Container } from '@material-ui/core';
import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';


const Header: React.FC = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;