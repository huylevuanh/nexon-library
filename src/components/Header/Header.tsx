import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="header-container">
      <img
        onClick={() => navigate("/")}
        src="https://nexonlibrary.com/front/images/logo_en.png"
        alt="logo"
      />
      <p onClick={() => navigate("/page/info/intro")}>{t("ABOUT_US")}</p>
      <span>
        <a
          href={`${window.location.href}`}
          onClick={() => changeLanguage("kr")}
        >
          KOR
        </a>
        <a
          href={`${window.location.href}`}
          onClick={() => changeLanguage("en")}
        >
          ENG
        </a>
      </span>
    </div>
  );
};

export default Header;
