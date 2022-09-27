import { backgroundImage, programSliderInfo } from "../../constants";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import ProgramSlider from "./ProgramSlider";
import Introduce from "./Introduce";
import Stories from "./Stories";
import NoticeSection from "./NoticeSection";

import "./Home.scss";

const Home = (): JSX.Element => {
  const backgroundIndicator = {
    width: 14,
    height: 14,
    transition: "width 300ms ease",
    color: "transparent",
    border: "3px solid white",
    opacity: 1,
    backgroundColor: "transparent",

    "&[data-active]": {
      width: 50,
      backgroundColor: "#4b89dc",
      border: 'none'
    },
  };
  return (
    <div className="homepage-container">
      <section className="homepage-carousel-container">
        <ImageCarousel
          content={backgroundImage}
          height={847}
          maxWidth={1970}
          indicator={backgroundIndicator}
          childButton={true}
          auto
        />
      </section>
      <section className="introduce-container main-layout">
        <Introduce />
      </section>

      <section className="program-container main-layout d-flex">
        <ProgramSlider data={programSliderInfo} />
      </section>

      <section className="stories-container">
        <Stories />
      </section>

      <section className="notice-section-container main-layout d-flex">
        <NoticeSection />
      </section>
    </div>
  );
};

export default Home;
