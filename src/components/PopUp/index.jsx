import { Collapse } from "antd";
import 'antd/dist/antd.css';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import "./style.scss"
// import { useTranslation } from "react-i18next";


function PopUp({ t }) {
  // const { t, i18n } = useTranslation()
  return (
    <>
      <h1 className="data">{t("privacy")}</h1>
      <Collapse
        accordion expandIconPosition="end"
        expandIcon={({ isActive }) => isActive ?
          <UpOutlined style={{ color: "#00b0f3" }} />
          : <DownOutlined />}>
        <Collapse.Panel header="Provider" key="1">
          <div className="box">
            <h2 className="text">Provider</h2>
            <p className="box-elem">
              {t("prText")}
            </p>
            <h3>{t("management")}</h3>
            <span>{t("managementTeam")}</span>
            <h3>{t("registry")}</h3>
          </div>

        </Collapse.Panel>
        <Collapse.Panel header="Cookie" key="2">
          <div className="box">
            <h2 className="text">Cookies</h2>
            <p>{t("cookiesText")}</p>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Data protection" key="3">
          <div className="box">
            <h2 className="text">{t("protection")}</h2>
            <p>{t("protectionText")}</p>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="Legal Notice" key="4">
          <div className="box">
            <h2 className="text">{t("legal")}</h2>
            <h3>{t("copyRight")}</h3>
            <p>{t("copyRightText")}</p>
          </div>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}

export default PopUp;