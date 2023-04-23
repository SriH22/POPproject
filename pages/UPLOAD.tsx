import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UPLOAD.module.css";
const UPLOAD: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/take-photo");
  }, [navigate]);

  return (
    <div className={styles.upload}>
      <div className={styles.uploadChild} />
      <img
        className={styles.uploadItem}
        alt=""
        src="/ellipse-6.svg"
        onClick={onEllipseClick}
      />
    </div>
  );
};

export default UPLOAD;
