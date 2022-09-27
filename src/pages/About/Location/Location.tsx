import { useState } from "react";
import { Center } from "@mantine/core";
import { useTranslation } from "react-i18next";

import ImageCarousel from "../../../components/Carousel/ImageCarousel";
import { locationImage } from "../../../constants/index";

import "./Location.scss";

const locationIndicator = {
  width: 10,
  height: 10,
  transition: "width 250ms ease",
  border: "2px solid rgba(204, 203, 200, 0.932)",
  opacity: 1,

  "&[data-active]": {
    width: 25,
    backgroundColor: "#4b89dc",
    border: "none",
  },
};

const Location = (): JSX.Element => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  const handleClickNext = () => {
    setStep((prev) => (prev === locationImage.length - 1 ? 0 : prev + 1));
  };

  const handleClickPrev = () => {
    setStep((prev) =>
      prev === 0 ? prev + locationImage.length - 1 : prev - 1
    );
  };

  return (
    <div className="main-layout location-container">
      <h1 className="title-h4 text-uppercase pb-3">{t("LOCATION_BY_REGION")}</h1>
      <div className="d-flex">
        <div className="map-box">
          <img
            src="https://nexonlibrary.com/front/images/img_intro1.jpg"
            alt="map_box"
          />
          <Center className={`Seoul ${step === 0 ? "active" : ""}`}>
            <p>{t('SEOUL')}</p>
            <p className="common-primary-text">44</p>
          </Center>
          <Center className={`Gangwon ${step === 1 ? "active" : ""}`}>
            <p>{t('GANGWON')}</p>
            <p className="common-primary-text">10</p>
          </Center>
          <Center className={`Chung-Cheong ${step === 2 ? "active" : ""}`}>
            <p>{t('CHUNG_CHEONG')}</p>
            <p className="common-primary-text">16</p>
          </Center>
          <Center className={`Gyeong-Sang ${step === 3 ? "active" : ""}`}>
            <p>{t('GYEONG_SANG')}</p>
            <p className="common-primary-text">16</p>
          </Center>
          <Center className={`Jeolla ${step === 4 ? "active" : ""}`}>
            <p>{t('JEOLLA')}</p>
            <p className="common-primary-text">23</p>
          </Center>
          <Center className={`Jeju ${step === 5 ? "active" : ""}`}>
            <p>{t('JEJU')}</p>
            <p className="common-primary-text">13</p>
          </Center>
        </div>

        <ImageCarousel
          content={locationImage}
          height={570}
          maxWidth={570}
          indicator={locationIndicator}
          auto={false}
          onNextSlide={handleClickNext}
          onPreviousSlide={handleClickPrev}
        />
      </div>
    </div>
  );
};

export default Location;
