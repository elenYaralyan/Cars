import Button from '@mui/material/Button';
import React from 'react';
import land from "../../assets/images/landingpage.jpg"
import asset from "../../assets/images/asset.jpg";
import "./style.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slide from '../Slide';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { btn } from '../../assets/style/styleJS/style';

function Home() {
    return (
        <div className='home-component'>
            <div className='big-logo'>
                <img src={land} alt="bigLogo" className='big-logo-img' />
                <div className='mini-container'>
                    <hr className='line' />
                    <span className='greeting'>Welcome to Mercedes-Benz  Armenia</span>
                    <Link to="/company">
                        <Button variant="contained" sx={btn} >
                            <ArrowForwardIosIcon sx={{ maxWidth: 10, m: 0 }} />
                            More About
                        </Button>
                    </Link>
                </div>
            </div>
            <Slide />
            <div className='asset'>
                <img src={asset} alt="" />
                <span className='contact'>Contact US</span>
            </div>
            <div className='soc-media'>
                <FacebookIcon sx={{ color: "#333333" }} className="hover" />
                <InstagramIcon sx={{ color: "#333333" }} className="hover" />
            </div>
        </div>
    )
}

export default Home
