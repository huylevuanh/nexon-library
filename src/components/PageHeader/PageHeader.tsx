import { useTranslation } from "react-i18next";
import "./PageHeader.scss";

interface IPageHeader {
  backgroundUrl: string;
  title: string;
  subtitle: string | "";
}
const PageHeader = ({
  backgroundUrl,
  title,
  subtitle,
}: IPageHeader): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="page-header" style={{backgroundImage: `url(${backgroundUrl})`}}>
      <h6 className="subtitle-bold">{t(title)}</h6>
      <p className="second-common-text">{t(subtitle)}</p>
    </div>
  );
};

export default PageHeader;
