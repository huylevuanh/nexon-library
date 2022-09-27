import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Stories = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="stories-content main-layout d-flex">
      <ProgressBar step={3} />
      <img src="https://nexonlibrary.com/upload/62b00ad45013f.jpg"  alt="stories"/>
      <div className="stories-right-content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className="title-h3">{t("STORY")}</h1>
          <Button
            variant="subtle"
            color="dark"
            rightIcon={<AiOutlineArrowRight />}
            className="button-see-more"
            onClick={() => navigate('/page/story/list')}
          >
            {t("MORE_STORIES")}
          </Button>
        </div>

        <p className="third-common-text">
          Now, in the{" "}
          <span style={{ color: "#4b89dc" }}>Nexon Small Bookstore</span>, this
          kind of dream is growing.
        </p>
      </div>

      <div className="conts-box">
        <h4 className="title-h4">{t("NEXON_LIBRARY_RENEWAL")}</h4>
        <p className="common-text-4">
          {t('PROGRAM_FOR_CHILDREN')}
        </p>
        <Button
          variant="subtle"
          color="dark"
          rightIcon={<AiOutlineArrowRight />}
          className="button-see-more"
        >
          {t("READ_MORE")}
        </Button>
      </div>
    </div>
  );
};

export default Stories;
