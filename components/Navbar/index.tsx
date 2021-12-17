import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Navbar = () => {

    return (
        <AppBar position="static">
            <Toolbar className='ui-navbar__toolbar'>
                <ArrowBackIcon/>
                <MoreVertIcon/>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar;
