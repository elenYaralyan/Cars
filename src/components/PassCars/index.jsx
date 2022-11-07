import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import class1 from "../../assets/images/class1.jpg"
import class2 from "../../assets/images/class2.jpg"
import "./style.scss"
import { btn, btn1, responsive1 } from '../../assets/style/styleJS/style';
import car1 from "../../assets/images/car1.jpg"
import car2 from "../../assets/images/car2.jpg"
import car3 from "../../assets/images/car3.jpg"
import light from "../../assets/images/light.jpg"
import car4 from "../../assets/images/car4.jpg"
import car5 from "../../assets/images/car5.jpg"
import car6 from "../../assets/images/car6.jpg"
import callcenter from "../../assets/images/callcenter.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function PassCars() {
  return (
    <div className='mainElem'>
      <div className='wrapper'>
        <Carousel
          responsive={responsive1}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          slidesToSlide={1}
          swipeable
        >
          <div className='wrapperImg'>
            <img src={class1} alt="" className='img' />
            <div className='textWrapper'>
              <hr className='line' />
              <h2 className='bigText'>The new A-Class.</h2>
              <span className='smallText'>Just like you.</span>
            </div>
          </div>
          <div className='wrapperImg'>
            <img src={class2} alt="" className='img' />
            <div className='textWrapper'>
              <hr className='line' />
              <h2 className='bigText'>The new CLS-Class.</h2>
              <span className='smallText'>Risk and Affair.</span>
              <Button variant="contained" sx={btn} >
                <ArrowForwardIosIcon sx={{ maxWidth: 10, m: 0 }} />
                More About
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='carWrapper'>
        <div className='elem-wrapper'>
          <img src={car1} alt="" className='drive' />
          <h2 className='name'>A sportier choice:</h2>
          <span className='minText'>the new Mercedes-Benz GLE Coupé.</span>
        </div>
        <div className='elem-wrapper'>
          <img src={car6} alt="" className='drive' />
          <h2 className='name'>Update</h2>
          <span className='minText'> Find out about our individual offers and models.</span>
        </div>
        <div className='elem-wrapper'>
          <img src={car4} alt="" className='drive' />
          <h2 className='name'> Mercedes-Benz S-Class:</h2>
          <span className='minText'>intelligent drive.</span>
        </div>
      </div>
      <div className='other-wrapper'>
        <div className='other' >
          <h2 className='text-wrap'>Contact</h2>
          <img src={callcenter} alt="" className='small' />
          <span className='small-text'>Tel: +374 60 68 0000</span>
          <span className='small-text'>
            Get in touch with us!
            <ArrowForwardIosIcon fontSize="10px" sx={{ ml: "135px" }} />
          </span>
          <span className='small-text'>
            Make an appointment
            <ArrowForwardIosIcon fontSize="10px" sx={{ ml: "130px" }} />
          </span>
        </div>
        <div className="other">
          <h2 className='text-wrap'>News</h2>
          <span className='text-wrap-second'>"Avangard Motors" LLC yearly financial report</span>
          <span className='small-text'>
            Consolidated financial report
            <ArrowForwardIosIcon fontSize="10px" color='00b0f3' />
            more
          </span>
          <Button variant="contained" sx={btn1}>
            <ArrowForwardIosIcon sx={{ maxWidth: 10, m: 0 }} />
            Show All News
          </Button>
        </div>
        <div className="another">
          <img src={car3} alt="" className='anImg' />
          <h2 className='name'> Product finder. </h2>
          <span className='minText'> Find the most suitable <br /> financing model.</span>
        </div>
        <div className="another">
          <img src={light} alt="" className='anImg' />
          <h2 className='name'>Model overview.</h2>
          <span className='minText'> All models at a glance. </span>
        </div>
        <div className="another">
          <img src={car5} alt="" className='anImg' />
          <h2 className='name'> The new V-Class</h2>
        </div>
        <div className="another">
          <img src={car2} alt="" className='anImg' />
          <h2 className='name'>The new Mercedes-Benz GLE</h2>
          <span className='minText'>Efficiency meets performance</span>
        </div>
      </div>
      <div className='soc-media'>
        <FacebookIcon sx={{ color: "#333333" }} className="fcIn" />
        <InstagramIcon sx={{ color: "#333333" }} className="fcIn" />
      </div>
    </div>
  );
}

export default PassCars;