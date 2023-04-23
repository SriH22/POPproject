import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ACKNOWLEDGE.module.css";
const ACKNOWLEDGE: FunctionComponent = () => {
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

  const onEllipse2Click = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onBackArrowImageClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className={styles.acknowledge}>
      <img
        className={styles.acknowledgeChild}
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
      <img className={styles.acknowledgeItem} alt="" src="/ellipse-4.svg" />
      <img className={styles.approvalIcon} alt="" src="/approval@2x.png" />
      <img
        className={styles.acknowledgeInner}
        alt=""
        src="/ellipse-3.svg"
        onClick={onEllipse2Click}
      />
      <img
        className={styles.backArrowIcon}
        alt=""
        src="/back-arrow@2x.png"
        onClick={onBackArrowImageClick}
      />
    </div>
  );
};

export default ACKNOWLEDGE;
