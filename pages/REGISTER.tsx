import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTER.module.css";
const REGISTER: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <img className={styles.registerChild} alt="" src="/ellipse-1.svg" />
      <div className={styles.pop}>POP</div>
      <img className={styles.policeCapIcon} alt="" src="/police-cap@2x.png" />
      <div className={styles.registerItem} />
      <div className={styles.enterYourMail}>Enter Your Mail ID</div>
      <div className={styles.registerInner} onClick={onRectangle1Click} />
      <div className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </div>
    </div>
  );
};

export default REGISTER;
