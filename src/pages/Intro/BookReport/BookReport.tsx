import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Markup } from "interweave";
import { Button, Grid } from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";

import PageHeader from "../../../components/PageHeader/PageHeader";
import StatisticBlock from '../../../components/StatisticsBlock/StatisticBlock';
import {  currentStatisticsIntro_3 } from "../../../constants";
import {routes} from '../../routes_string';

import "../Intro.scss";

const BookReport = (): JSX.Element => {
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
            {t("BOOK_REPORT_CONTEST_AWARD")}
          </span>
        </div>
        <p className="title-h3-primary font-italic text-center">
          {t("CHILDREN_PRAISED_CLOSE_TO_BOOKS")}
        </p>
        <div className="common-text-5 pt-4">
          <Markup content={t("BOOK_REPORT_CONTENT")} />
        </div>
      </div>

      <div className="current-status-container intro-3">
        <StatisticBlock data={currentStatisticsIntro_3} />
      </div>

      <div className="main-layout">
        <Grid className="pb-5">
          <Grid.Col span={8}>
            <img
              src="https://nexonlibrary.com/upload/607a519fcd8ef.jpg"
              alt="img_1"
            />
          </Grid.Col>
          <Grid.Col span={4} className="py-4">
            <p className="common-text-bold">{t("READ_BOOK_WITH_TEACHERS")}</p>
            <p className="common-text-6">{t("THE_PROFESSIONAL_READING")}</p>
          </Grid.Col>
        </Grid>

        <Grid className="py-5 border-bottom">
          <Grid.Col span={4} className="p-4">
            <p className="common-text-bold">{t("BUILD_CHILD_CONFIDENCE")}</p>
            <p className="common-text-6">
              {t("THROUGH_IMAGINARY_SEED_PROGRAM")}
            </p>
          </Grid.Col>

          <Grid.Col span={8} className="px-5">
            <img
              src="https://nexonlibrary.com/upload/607a4d425b387.jpg"
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
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_2, {replace: false})}>
            {t("IMAGINARY_SEED")}
          </Button>
          <Button variant="outline" rightIcon={<AiOutlineArrowRight />} onClick={() => navigate(routes.INTRO.INTRO_1, {replace: false})}>
            {t("FOREIGN_BOOKSTORE")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookReport;
