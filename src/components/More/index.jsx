import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import "./style.scss"

function More() {
  return (
    <div className='more'>
      <div className='main-elem'>
        <h3 className='comp'>Company.</h3>
        <h5 className='description'>Avangard Motors LLC <br />
          General Distributor for Mercedes-Benz Group AG in Armenia since 2004.</h5>
        <div className='soc-media'>
          <FacebookIcon sx={{ color: "#333333" }} className="hover"/>
          <InstagramIcon sx={{ color: "#333333" }} className="hover"/>
        </div>
      </div>
    </div>
  );
}

export default More;