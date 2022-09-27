import { ReactNode, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import {  Paper, Button } from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import './ImageCarousel.scss';

export interface ICard {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

interface IImageCarousel {
  childButton?: ReactNode;
  content: ICard[];
  height: number;
  maxWidth: number;
  indicator: {
    width: number;
    height: number;
    transition: string;
  };
  auto: boolean;
  onNextSlide?: () => void;
  onPreviousSlide?: () => void;
}

const ImageCarousel = ({
  content,
  height,
  maxWidth,
  indicator,
  childButton,
  auto,
  onNextSlide,
  onPreviousSlide
}: IImageCarousel): JSX.Element => {

  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { t } = useTranslation();
  const navigate = useNavigate()
  const slides = content.map((item) => {
    return (
      <Carousel.Slide key={item.subtitle}>
        <Paper
          shadow="md"
          p="xl"
          sx={{ backgroundImage: `url(${item.image})` }}
          className='carousel-card'
        >
          <div className="text-container">
            <p className="carousel-title">{t(`${item.title}`)}</p>
            <p className="carousel-subtitle">{t(`${item.subtitle}`)}</p>
            {item.title !== content[2].title && childButton && (
              <Button
                className='carousel-button'
                rightIcon={<AiOutlineArrowRight />}
                onClick={() => navigate('/page/story/list')}
              >
                 {t("STORIES")} 
              </Button>
            )}
          </div>
        </Paper>
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      sx={{ maxWidth: maxWidth }}
      mx="auto"
      height={height}
      withIndicators
      styles={{
        indicator: indicator,
      }}
      loop
      plugins={auto ? [autoplay.current] : []}
      onNextSlide={onNextSlide}
      onPreviousSlide={onPreviousSlide}
    >
      {slides}
    </Carousel>
  );
};

export default ImageCarousel;
