import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FAQ from "./pages/FAQ";
import LOGININFO from "./pages/LOGININFO";
import ACKNOWLEDGE from "./pages/ACKNOWLEDGE";
import DEPT from "./pages/DEPT";
import TAKEPHOTO from "./pages/TAKEPHOTO";
import UPLOAD from "./pages/UPLOAD";
import UPLOAD1 from "./pages/UPLOAD1";
import UPLOAD2 from "./pages/UPLOAD2";
import MAIN from "./pages/MAIN";
import REGISTER from "./pages/REGISTER";
import Click from "./pages/Click";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-info":
        title = "";
        metaDescription = "";
        break;
      case "/acknowledge":
        title = "";
        metaDescription = "";
        break;
      case "/dept":
        title = "";
        metaDescription = "";
        break;
      case "/take-photo":
        title = "";
        metaDescription = "";
        break;
      case "/upload1":
        title = "";
        metaDescription = "";
        break;
      case "/upload2":
        title = "";
        metaDescription = "";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/click":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FAQ />} />
      <Route path="/login-info" element={<LOGININFO />} />
      <Route path="/acknowledge" element={<ACKNOWLEDGE />} />
      <Route path="/dept" element={<DEPT />} />
      <Route path="/take-photo" element={<TAKEPHOTO />} />
      <Route path="/upload1" element={<UPLOAD />} />
      <Route path="/upload2" element={<UPLOAD1 />} />
      <Route path="/upload" element={<UPLOAD2 />} />
      <Route path="/main" element={<MAIN />} />
      <Route path="/register" element={<REGISTER />} />
      <Route path="/click" element={<Click />} />
    </Routes>
  );
}
export default App;
