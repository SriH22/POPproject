import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TAKEPHOTO.module.css";
const TAKEPHOTO: FunctionComponent = () => {
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
    <div className={styles.takePhoto}>
      <img
        className={styles.takePhotoChild}
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
      <div className={styles.takePhotoItem} />
      <div className={styles.uploadedPhoto}>
        <p className={styles.uploaded}>Uploaded</p>
        <p className={styles.uploaded}>Photo</p>
      </div>
      <div className={styles.takePhotoInner} />
      <div className={styles.leaveMessage}>Leave message...</div>
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.send} onClick={onSENDTextClick}>
        SEND
      </div>
    </div>
  );
};

export default TAKEPHOTO;
