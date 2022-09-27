import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {routes} from '../routes_string';

const NoticeSection = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="left-content">
        <h3 className="title-h3">{t("NOTICE")}</h3>
        <span className="common-text">
          {t('ANNOUNCEMENT_OF_WINNER')}
        </span>
        <p className="common-text-4">2022.07.11</p>
      </div>
      <Button
          variant="subtle"
          color="dark"
          rightIcon={<AiOutlineArrowRight />}
          className="button-see-more"
          onClick={() => navigate(routes.NOTICE.LISTING_PAGE)}
        >
          {t("NOTICE_MORE")}
        </Button>
    </>
  );
};

export default NoticeSection;
