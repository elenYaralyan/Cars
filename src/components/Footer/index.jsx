import "./style.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="blocks">
          <h4 className="hint">Mercedes-Benz Armenia</h4>
          <span>Parts: +374 60 68 0000</span>
          <span>Service: +374 60 68 0000</span>
          <span>New vehicles: +374 60 68 0000</span>
          <span>Email: <a href="mailto:agm@mercedes-benz.am">agm@mercedes-benz.am</a> </span>
        </div>
        <div className="blocks">
          <h4 className="hint">General opening times</h4>
          <span>Now open</span>
          <span>Monday:09:00 - 18:00</span>
          <span>Tuesday:09:00 - 18:00</span>
          <span>Wednesday:09:00 - 18:00</span>
          <span>Thursday:09:00 - 18:00</span>
          <span>Friday:09:00 - 18:00</span>
          <span>Saturday:10:00 - 18:00</span>
          <span>Sunday:	Closed</span>
        </div>
        <div className="blocks">
          <h4 className="hint">How to find us</h4>
          <span>Gai Ave. 14/3</span>
          <span>0056 Yerevan</span>
          <span>Tel: +374 60 68 0000</span>
          <span className="arrow">
            <ArrowForwardIosIcon sx={{ width: 10, pt: 2 }} />
            All Locations
          </span>
        </div>
      </div>
      <div className="bottom">
        <span className="items line">Provider</span>
        <span className="items line">Cookies</span>
        <span className="items line">Data protection</span>
        <span className="items">Legal Notice</span>
      </div>
    </>
  );
}
export default Footer;