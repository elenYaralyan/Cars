// import { Carousel } from 'antd';
import bus from "../../assets/images/bus.jpg";
import minivan from "../../assets/images/minivan.jpg";
import car from "../../assets/images/car.jpg"
import truck from "../../assets/images/truck.jpg"
import "./style.scss"
import { Link } from 'react-router-dom';
import { responsive } from '../../assets/style/styleJS/style';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function Slide() {
  return (
    <div className='wrapper'>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={7000}
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
        renderDotsOutside
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable
      >
        <div className='slide-elem'>
          <img src={bus} alt="" className='img' />
          <span className='type'>Buses</span>
        </div>
        <div className='slide-elem'>
          <img src={minivan} alt="" className='img' />
          <span className='type'>Vans</span>
        </div>
        <div className='slide-elem' title="Click to know more">
          <Link to={"/passCars"} style={{ color: '#fff' }}>
            <img src={car} alt="" className='img' />
            <span className='type' >Passenger Cars</span>
          </Link>
        </div>
        <div className='slide-elem'>
          <img src={truck} alt="" className='img' />
          <span className='type'>Trucks</span>
        </div>
      </Carousel>
    </div>
  );
}

export default Slide;