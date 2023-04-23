import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DEPT.module.css";
const DEPT: FunctionComponent = () => {
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

  const onRectangle1Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onMunicipalCorporationTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onPoliceDepartmentTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onBlueCrossTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onFireServiceTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  const onElectricityBoardTextClick = useCallback(() => {
    navigate("/acknowledge");
  }, [navigate]);

  return (
    <div className={styles.dept}>
      <img
        className={styles.deptChild}
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
      <div className={styles.deptItem} />
      <div className={styles.sendTo}>SEND TO</div>
      <img className={styles.doubleUpIcon} alt="" src="/double-up@2x.png" />
      <div className={styles.deptInner} onClick={onRectangle1Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.deptChild1} onClick={onRectangle3Click} />
      <div className={styles.deptChild2} onClick={onRectangle4Click} />
      <div className={styles.deptChild3} onClick={onRectangle5Click} />
      <div className={styles.text} onClick={onTextClick} />
      <div className={styles.text1} onClick={onText1Click} />
      <div className={styles.text2} onClick={onText2Click} />
      <div className={styles.text3} onClick={onText3Click} />
      <div className={styles.text4} onClick={onText4Click} />
      <div
        className={styles.municipalCorporation}
        onClick={onMunicipalCorporationTextClick}
      >
        Municipal corporation
      </div>
      <div
        className={styles.policeDepartment}
        onClick={onPoliceDepartmentTextClick}
      >
        Police Department
      </div>
      <div className={styles.blueCross} onClick={onBlueCrossTextClick}>
        Blue Cross
      </div>
      <div
        className={styles.fireService}
        onClick={onFireServiceTextClick}
      >{`Fire Service `}</div>
      <div
        className={styles.electricityBoard}
        onClick={onElectricityBoardTextClick}
      >
        Electricity Board
      </div>
    </div>
  );
};

export default DEPT;
