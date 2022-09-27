import { useTranslation } from "react-i18next";
import { Statistics } from "../../constants/type";

import "./StatisticBlock.scss";

interface IStatisticsBlock {
  data: Statistics[];
}

const StatisticBlock = ({ data }: IStatisticsBlock): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="main-layout statistic-block-container">
      <h4 className="title-h4 text-uppercase pb-3 text-capitalize">
        {t("CURRENT_STATUS")}
      </h4>
      <div className="images-container">
        {data.map((item) => {
          return (
            <div className="image-wrapper" key={item.text}>
              <img src={item.imageUrl} alt="statistic-img" />
              <div>
                <p className="common-text-6">{item.text}</p>
                <p className="common-primary-text">{item.stats}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatisticBlock;
