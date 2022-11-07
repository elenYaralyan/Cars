import React, { useState } from 'react';
import Star from '../../assets/images/Star';
import "./style.scss"
import info from "../../assets/images/icon_sprite.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { style } from '../../assets/style/styleJS/style';
import { Link } from 'react-router-dom';
import PopUp from '../PopUp';
import { useTranslation } from 'react-i18next';
import Hover from '../Hover';

function Header() {
    const [open, setOpen] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    const { t, i18n } = useTranslation()
    const [dataType, setDataType] = useState("")
   
    const handleMouseOver = (e) => {
        if (e.target.className === "elem") {
            e.target.className = "elem elem-after"
            console.log(e.target);
            setDataType(e.target.id)
            setIsHovering(true);
        }
        console.log(e.target);
    };

    const handleMouseOut = (e) => {
        if (e.target.className === "elem elem-after") {
            e.target.className = "elem"
            setIsHovering(false);
        }
    };

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.id);
    };
    return (
        <>
            <header className='header' >
                <div className='top'>
                    <div className='logo-container'>
                        <Star />
                        <Link to="/" style={{ color: '#fff' }}>
                            <p className='title'> Mercedes-Benz </p>
                        </Link>
                    </div>
                    <div className='info'>
                        <div className='data-info'>
                            <span>
                                <img src={info} className="add-info" alt="logo" onClick={handleOpen} />
                            </span>
                            <span className='pdp'>
                                {t("privacy")}
                            </span>
                            <ul className='langs'>
                                <li className='lang' id='en' onClick={changeLanguage}>EN</li>
                                <li className='lang' id='hy' onClick={changeLanguage}>HY</li>
                                <li className='lang' id='ru' onClick={changeLanguage}>RU</li>
                            </ul>
                        </div>
                        <div className='info-container'>
                            <span className='name'>Mercedes-Benz Armenia</span>
                            <span className='phone'>{t("phone")}: +374 60 68 0000</span>
                        </div>
                    </div>
                </div>
                <div className='info-nav' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <span id='vehicles' className='elem'>{t("vehicles")}</span>
                    <span id='services' className='elem'>{t("services")}</span>
                    <span id='finServices' className='elem'>{t("finServices")}</span>
                    <span id='action' className='elem'>{t("action")}</span>
                    <span id='about' className='elem'>{t("about")}</span>
                </div>
                {isHovering && <Hover
                 dataType={dataType} t={t}/>}
            </header>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button className='close' onClick={handleClose}><CloseIcon /></button>
                    <PopUp t={t} />
                </Box>
            </Modal> 
        </>
    )
}

export default Header