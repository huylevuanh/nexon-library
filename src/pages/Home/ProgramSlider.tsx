import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Grid } from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { ProgramSliderData } from "../../constants/type";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

interface IProgramSlider {
  data: ProgramSliderData[];
}
const ProgramSlider = ({ data }: IProgramSlider): JSX.Element => {
  const [step, setStep] = useState(0);
  const [choosenImage, setChoosenImage] = useState(data[step].images[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <ProgressBar step={2} />
      <div className="text-content">
        <p className="common-text">{data[step].intro}</p>
        <p className="subtitle-bold">{data[step].title}</p>
        <p className="second-common-text">{data[step].purpose}</p>
        <Button
          variant="subtle"
          color="dark"
          rightIcon={<AiOutlineArrowRight />}
          className="button-see-more"
          onClick={() => navigate("page/info/intro")}
        >
          {t("READ_MORE")}
        </Button>
        <div className="step-button-wrapper">
          <Button
            variant="outline"
            leftIcon={<MdArrowBackIos />}
            size="lg"
            color="dark"
            compact
            onClick={() => {
              setStep((prev) => prev - 1);
              setChoosenImage(data[step - 1].images[0]);
            }}
            disabled={step === 0}
          ></Button>
          <Button
            variant="outline"
            rightIcon={<MdArrowForwardIos />}
            size="lg"
            color="dark"
            compact
            onClick={() => {
              setStep((prev) => prev + 1);
              setChoosenImage(data[step + 1].images[0]);
            }}
            disabled={step === data.length - 1}
          ></Button>
        </div>
      </div>

      <div className="image-program-container">
        <Grid className="small-image">
          {data[step].images.map((img) => {
            return (
              <div
                onClick={() => {
                  setChoosenImage(img);
                }}
                key={img.url}
              >
                <img src={img.url} alt="choosen-img" />;
              </div>
            );
          })}
        </Grid>
        <div className="big-image">
          <img src={choosenImage.url} alt="big-img" />
          <div className="big-image-title">{choosenImage.textContent}</div>
        </div>
      </div>
    </>
  );
};

export default ProgramSlider;
