import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UPLOAD1.module.css";
const UPLOAD1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/login-info");
  }, [navigate]);

  const onPOPTextClick = useCallback(() => {
    navigate("/login-info");
  }, [navigate]);

  const onPoliceCapImageClick = useCallback(() => {
    navigate("/login-info");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/dept");
  }, [navigate]);

  const onSENDTextClick = useCallback(() => {
    navigate("/dept");
  }, [navigate]);

  return (
    <div className={styles.upload}>
      <img
        className={styles.uploadChild}
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
      <div className={styles.uploadItem} />
      <img className={styles.doubleDownIcon} alt="" src="/double-down@2x.png" />
      <div className={styles.browseDeviceToContainer}>
        <p className={styles.browseDevice}>Browse Device</p>
        <p className={styles.browseDevice}>to upload</p>
      </div>
      <div className={styles.uploadInner} />
      <div className={styles.leaveMessage}>Leave message...</div>
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.send} onClick={onSENDTextClick}>
        SEND
      </div>
    </div>
  );
};

export default UPLOAD1;
