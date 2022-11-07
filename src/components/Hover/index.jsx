import { useState } from "react";
// import { useTranslation } from "react-i18next";
import column1 from "../../assets/images/flyout-column-1.png"
import column2 from "../../assets/images/flyout-column-2.png"
import column3 from "../../assets/images/flyout-column-3.png"
import column4 from "../../assets/images/flyout-column-4.png"
import column5 from "../../assets/images/flyout-column-5.png"
import "./style.scss"

function Hover({ dataType, t }) {
  // const { t, i18n } = useTranslation()z
  const [content, setContent] = useState({
    vehicles: [{
      title: t("newCar"),
      elem: t("modeStandard"),
    }],
    services: [{
      title1: t("manAndRep"),
      title2: t("serAndWarr"),
      title3: t("ganParts"),
      elem1: t("workOffer"),
      elem2: t('serviceCont'),
      elem3: t('carCare ')

    }],
    finServices: [{
      title: t('finProduct'),
      elem: t('financProduct')
    }],
    action: [{
      title: t('events'),
      title1: t('career')
    }],
    about: [{
      title: t('company'),
      title1: t('news'),
      title2: t('contacts'),
      elem: t("company"),
      elem1: t('news'),
      elem2: t('contacts'),
    }]
  })
  return (
    <div className='nav-wrapper'>
      {content[dataType].map((el, index) => (
        <div key={index} className="info" >
          <div className='title-wrapper'>
            <img src={column1} alt="" className='show-img' />
            <h3 className='title'>{el.title}</h3>
            <span>{el.elem}</span>
          </div>
          <div className='title-wrapper'>
            <img src={column2} alt="" className='show-img' />
            <h3 className='title'>{el.title1}</h3>
            <span>{el.elem1}</span>
          </div>
          <div className='title-wrapper'>
            <img src={(dataType === "services") ? column5 : column3}
              alt="" className='show-img' />
            <h3 className='title'>{el.title2}</h3>
            <span>{el.elem2}</span>
          </div>
          <div className='title-wrapper'>
            <img src={column4} alt="" className='show-img' />
            <h3 className='title'>{el.title3}</h3>
            <span>{el.elem3}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Hover;