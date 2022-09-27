import Introduction from "./Introduction";
import Location from "./Location/Location";
import BuildImagination from "./BuildImagination/BuildImagination";
import MoreAbout from "./MoreAbout/MoreAbout";
import PageHeader from "../../components/PageHeader/PageHeader";
import StatisticBlock from "../../components/StatisticsBlock/StatisticBlock";
import { statisticsInfo } from "../../constants";
import "./About.scss";


const About = (): JSX.Element => {
  return (
    <div className="about-page-container">
      <PageHeader
        backgroundUrl="https://nexonlibrary.com/assets/front/images/bg_sub_intro.jpg"
        title="ABOUT_US"
        subtitle="IMAGINATION_GIFT"
      />

      <section className="introduction-container">
        <Introduction />
      </section>

      <section className="statistics-container">
        <StatisticBlock data={statisticsInfo} />
      </section>

      <section>
        <Location />
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <BuildImagination />
      </section>

      <section className="more-about-container">
        <MoreAbout />
      </section>
    </div>
  );
};

export default About;
