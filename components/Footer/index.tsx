import React from 'react';
import Home from '@material-ui/icons/home';
import LanguageIcon from '@material-ui/icons/Language';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { makeStyles } from '@material-ui/core/styles';


const Footer = () => {

    return(
        <div className="ui-footer__grid">
            <div className="svg">
                <Home />
            </div>
            <div className="svg">
                <MenuIcon />
            </div>
            <div className="svg">
                <AddBoxIcon />
            </div>
            <div className="svg">
                <WebAssetIcon />
            </div>
            <div className="svg">
                <LanguageIcon />
            </div>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    grid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    svg: {
        fill: '#3f51b5'
    }
  }));


export default Footer;