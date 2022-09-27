import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom';
import { Markup } from "interweave";
import { Button, Grid } from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";

import PageHeader from "../../../components/PageHeader/PageHeader";
import StatisticBlock from "../../../components/StatisticsBlock/StatisticBlock";
import { currentStatisticsIntro_2 } from "../../../constants";
import { routes } from "../../routes_string";

import "../Intro.scss";


const ImaginarySeed = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className="intro-page-container">
      <PageHeader
        backgroundUrl="https://nexonlibrary.com/assets/front/images/bg_sub_intro.jpg"
        title="INTRODUCTION_SMALL_LIBRARY"
        subtitle="POWER_OF_IMAGINARY"
      />

      <div className="main-layout intro-content-container text-center">
        <div className="intro-title">
          <span className="title-h4 text-capitalize">
            {t("IMAGINARY_SEED_PROGRAM")}
          </span>
        </div>
        <p className="title-h3-primary font-italic text-center">
          {t("POWER_OF_THINK")}
        </p>
        <div className="common-text-5 pt-4">
          <Markup content={t("IMAGINARY_CONTENT")} />
        </div>
      </div>

      <div className="current-status-container">
        <StatisticBlock data={currentStatisticsIntro_2} />
      </div>

      <div className="main-layout">
        <Grid className="pb-5">
          <Grid.Col span={8}>
            <img
              src="https://nexonlibrary.com/upload/607a4d1b5b3cc.jpg"
              alt="img_1"
            />
          </Grid.Col>
          <Grid.Col span={4} className="py-4">
            <p className="common-text-bold">{t("BOOK_REPORT_IMG_TITLE_1")}</p>
            <p className="common-text-6">{t("BOOK_REPORT_IMG_CONTENT_1")}</p>
          </Grid.Col>
        </Grid>

        <Grid className="py-5 border-bottom">
          <Grid.Col span={4} className="p-4">
            <p className="common-text-bold">{t("BOOK_REPORT_IMG_TITLE_2")}</p>
            <p className="common-text-6">{t("BOOK_REPORT_IMG_CONTENT_2")}</p>
          </Grid.Col>

          <Grid.Col span={8} className="px-5">
            <img
              src="https://nexonlibrary.com/upload/607a51c840803.jpg"
              alt="img_2"
            />
          </Grid.Col>
        </Grid>
      </div>

      <div className="main-layout pt-0 view-more-container">
        <p className="title-h4">{t('VIEW_MORE')}</p>
        <div className="d-flex justify-content-around pt-3">
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />}>
            {t("SMALL_BOOKSTORE")}
          </Button>
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_3, {replace: true})}>
            {t("READING_CEREMONY")}
          </Button>
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_1, {replace: true})}>
            {t("FOREIGN_BOOKSTORE")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImaginarySeed;
