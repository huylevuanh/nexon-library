import { useTranslation } from "react-i18next";
import ImageCarousel from "../../../components/Carousel/ImageCarousel";
import { imaginationImage } from "../../../constants";
import "./BuildImagination.scss";

const BuildImagination = (): JSX.Element => {
  const { t } = useTranslation();
  const imaginationIndicator = {
    width: 12,
    height: 12,
    transition: "width 250ms ease",
    border: "2px solid rgba(204, 203, 200, 0.932)",
    opacity: 1,
    backgroundColor: "transparent",

    "&[data-active]": {
      width: 30,
      backgroundColor: "#4b89dc",
      border: "none",
    },
  };

  return (
    <div className="main-layout imagination-container d-block">
      <p className="text-uppercase title-h4 pb-3">{t("BUILD_WITH_IMAGINATION")}</p>
      <ImageCarousel
        content={imaginationImage}
        height={681}
        maxWidth={1172}
        indicator={imaginationIndicator}
        auto
      />
    </div>
  );
};

export default BuildImagination;
