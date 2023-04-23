import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Click.module.css";
const Click: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onPOPTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onPoliceCapImageClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className={styles.click}>
      <img
        className={styles.clickChild}
        alt=""
        src="/ellipse-11.svg"
        onClick={onEllipseClick}
      />
      <div className={styles.pop} onClick={onPOPTextClick}>
        POP
      </div>
      <div className={styles.dutyOfEvery}>DUTY OF EVERY CITIZEN</div>
      <img
        className={styles.policeCapIcon}
        alt=""
        src="/police-cap1@2x.png"
        onClick={onPoliceCapImageClick}
      />
      <div className={styles.pointOutProblem}>POINT OUT PROBLEM</div>
    </div>
  );
};

export default Click;
