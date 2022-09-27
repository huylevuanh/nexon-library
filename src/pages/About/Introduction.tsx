import { useTranslation } from "react-i18next";

const Introduction = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="main-layout d-flex">
      <img src="https://nexonlibrary.com/upload/60c8430da1e64.jpg" alt="introduction" />
      <div className="intro-right-content">
        <div className="intro-title">
          <span className="title-h4">{t("NEXON_LIBRARY")}</span>
        </div>
        <p className="title-h3">{t("MAGIC_PLACE")}</p>
        <p className="common-text-5">{t("SMALL_LIBRARY_PROJECT")}</p>
      </div>
    </div>
  );
};

export default Introduction;
