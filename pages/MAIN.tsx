import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MAIN.module.css";
const MAIN: FunctionComponent = () => {
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

  const onEllipse1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/upload1");
  }, [navigate]);

  const onUploadPhotoTextClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  const onTakePhotoTextClick = useCallback(() => {
    navigate("/upload1");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <img
        className={styles.mainChild}
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
      <img
        className={styles.mainItem}
        alt=""
        src="/ellipse-2.svg"
        onClick={onEllipse1Click}
      />
      <div className={styles.faq} onClick={onFAQTextClick}>
        FAQ
      </div>
      <img className={styles.cameraIcon} alt="" src="/camera@2x.png" />
      <div className={styles.mainInner} onClick={onRectangleClick} />
      <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
      <div className={styles.uploadPhoto} onClick={onUploadPhotoTextClick}>
        Upload photo
      </div>
      <div className={styles.takePhoto} onClick={onTakePhotoTextClick}>
        Take photo
      </div>
    </div>
  );
};

export default MAIN;
