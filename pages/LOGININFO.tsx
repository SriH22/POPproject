import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LOGININFO.module.css";
const LOGININFO: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onPOPTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onPoliceCapImageClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/click");
  }, [navigate]);

  const onLOGOUTTextClick = useCallback(() => {
    navigate("/click");
  }, [navigate]);

  return (
    <div className={styles.loginInfo}>
      <img
        className={styles.loginInfoChild}
        alt=""
        src="/ellipse-1.svg"
        onClick={onEllipseClick}
      />
      <div className={styles.pop} onClick={onPOPTextClick}>
        POP
      </div>
      <img
        className={styles.policeCapIcon}
        alt=""
        src="/police-cap@2x.png"
        onClick={onPoliceCapImageClick}
      />
      <div className={styles.loginInfoItem} />
      <div className={styles.userName}>USER NAME</div>
      <div className={styles.loginInfoInner} />
      <div className={styles.personalInformationNameContainer}>
        <p className={styles.personalInformation}>PERSONAL INFORMATION:</p>
        <p className={styles.personalInformation}>{` `}</p>
        <p className={styles.personalInformation}>
          NAME : ....................................  PHONE
          :...................................
        </p>
        <p className={styles.personalInformation}>&nbsp;</p>
        <p className={styles.personalInformation}>
          MAIL : ......................................
        </p>
        <p className={styles.personalInformation}>&nbsp;</p>
        <p className={styles.personalInformation}>
          LOCATION : ............................
        </p>
        <p className={styles.personalInformation}>&nbsp;</p>
        <p className={styles.personalInformation}>&nbsp;</p>
        <p className={styles.personalInformation}>&nbsp;</p>
        <p className={styles.personalInformation}>&nbsp;</p>
      </div>
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.logOut} onClick={onLOGOUTTextClick}>
        LOG OUT
      </div>
    </div>
  );
};

export default LOGININFO;
