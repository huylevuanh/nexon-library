import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import {routes} from './routes_string';
import About from "./About/About";
import Home from "./Home/Home";
import Stories from "./Stories/Stories";
import Notice from "./Notice/Notice";
import ImaginarySeed from "./Intro/ImaginarySeed/ImaginarySeed";
import OverseaLibrary from "./Intro/OverseaLibrary/OverseaLibrary";
import BookReport from "./Intro/BookReport/BookReport";

const PageRoutes = (): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.INTRO.INTRO} element={<About />} />
      <Route path={routes.STORY.LISTING_PAGE} element={<Stories />} />
      <Route path={routes.NOTICE.LISTING_PAGE} element={<Notice/>}/>
      <Route path={routes.INTRO.INTRO_2} element={<ImaginarySeed />} />
      <Route path={routes.INTRO.INTRO_1} element={<OverseaLibrary />} />
      <Route path={routes.INTRO.INTRO_3} element={<BookReport />} />
    </Routes>
  );
};

export default PageRoutes;
