import { Button, Grid } from "@mantine/core";
import { Markup } from "interweave";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import PageHeader from "../../../components/PageHeader/PageHeader";
import StatisticBlock from "../../../components/StatisticsBlock/StatisticBlock";
import {
  currentStatisticsIntro_1,
  OverseasLibraryList,
} from "../../../constants";

import {routes} from '../../routes_string';

import "../Intro.scss";

const OverseaLibrary = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
            {t("OVERSEA_LIBRARY")}
          </span>
        </div>
        <p className="title-h3-primary font-italic text-center">
          {t("SPACE_WHERE_DREAM_REALIZED")}
        </p>
        <div className="common-text-5 pt-4">
          <Markup content={t("OVERSEA_LIBRARY_CONTENT")} />
        </div>
      </div>

      <div className="current-status-container intro-1">
        <StatisticBlock data={currentStatisticsIntro_1} />
      </div>

      <Grid className="stories-list main-layout border-bottom pb-3" gutter={30}>
        {OverseasLibraryList.map((item, idx) => {
          return (
            <Grid.Col key={idx} span={4}>
              <img src={item.imgUrl} alt="story-img" />
              <p className="second-common-text font-weight-bold mb-0 mt-3 text-center">
                {item.title}
              </p>
              <p className="common-text-5 text-center">{item.content}</p>
            </Grid.Col>
          );
        })}
      </Grid>

      <div className="main-layout pt-0 view-more-container pt-5">
        <p className="title-h4">{t('VIEW_MORE')}</p>
        <div className="d-flex justify-content-around pt-3">
          <Button rightIcon={<AiOutlineArrowRight />}>
            {t("SMALL_BOOKSTORE")}
          </Button>
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_2, {replace: true})}>
            {t("IMAGINARY_SEED")}
          </Button>
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_3, {replace: true})}>
            {t("BOOK_REPORT")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverseaLibrary;
