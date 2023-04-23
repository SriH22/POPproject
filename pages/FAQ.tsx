import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FAQ.module.css";
const FAQ: FunctionComponent = () => {
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
    navigate("/main");
  }, [navigate]);

  const onBackArrowImageClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className={styles.faq}>
      <img
        className={styles.faqChild}
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
      <div className={styles.faqItem} />
      <div className={styles.toReportAContainer}>
        <p className={styles.toReportA}>{`To Report A Crime `}</p>
        <p className={styles.toReportA}>
          Control Room........................100
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>{`To Report Traffic `}</p>
        <p className={styles.toReportA}>
          Violation.................................103
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>
          Ambulance..............................108
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>
          Child Line..............................1098
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>
          Women help Line..................1091
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>{`Coastal Security `}</p>
        <p className={styles.toReportA}>
          Help Line...............................1093
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>{`Railway Police Help `}</p>
        <p className={styles.toReportA}>
          Line.........................................1512
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>{`Anti Ragging complaints     `}</p>
        <p
          className={styles.toReportA}
        >{`                                 1800-180-5522  `}</p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>
          Protection Force..................1322
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.toReportA}>
          Cyber Crime...........................1930
        </p>
        <p className={styles.toReportA}>&nbsp;</p>
        <p className={styles.infoamanmovementorgrailway}>
          <span className={styles.span}>{`  `}</span>
          <a
            className={styles.infoamanmovementorgrailway1}
            href="mailto:info@amanmovement.orgRailway"
            target="_blank"
          >
            <span className={styles.infoamanmovementorgrailway2}>
              info@amanmovement.orgRailway
            </span>
          </a>
        </p>
      </div>
      <img
        className={styles.faqInner}
        alt=""
        src="/ellipse-3.svg"
        onClick={onEllipse1Click}
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

export default FAQ;
