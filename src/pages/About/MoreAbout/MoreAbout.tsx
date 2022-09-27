import { Button, Grid } from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {routes} from '../../routes_string';


const MoreAbout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="main-layout d-block">
      <p className="title-h4 text-uppercase pb-2">{t("MORE_ABOUT_US")}</p>
      <Grid className="pb-5">
        <Grid.Col span={8}>
          <img
            src="https://nexonlibrary.com/upload/607417e1a4c97.jpg"
            alt="img_1"
          />
        </Grid.Col>
        <Grid.Col span={4} className="py-4">
          <p className="common-text-bold text-uppercase">
            {t("READING PROGRAM")}
          </p>
          <p className="common-text-6">{t("WE_PARTNER_WITH_EXPERTS")}</p>
          <Button
            variant="outline"
            color="dark"
            rightIcon={<AiOutlineArrowRight />}
            className="button-see-more"
            onClick={() => navigate(routes.INTRO.INTRO_2)}
          >
            {t("READ_MORE")}
          </Button>
        </Grid.Col>
      </Grid>

      <Grid className="py-5">
        <Grid.Col span={4}>
          <p className="common-text-bold text-uppercase">
            {t("CONTEST_AND_AWARDS")}
          </p>
          <p className="common-text-6">{t("WE_ENCOURAGE_CHILDREN")}</p>
          <Button
            variant="outline"
            color="dark"
            rightIcon={<AiOutlineArrowRight />}
            className="button-see-more"
            onClick={() => navigate(routes.INTRO.INTRO_3)}
          >
            {t("READ_MORE")}
          </Button>
        </Grid.Col>
        <Grid.Col span={8}>
          <img
            src="https://nexonlibrary.com/upload/6074181b3d5c4.jpg"
            alt="img_2"
          />
        </Grid.Col>
      </Grid>

      <Grid className="py-5">
        <Grid.Col span={8}>
          <img
            src="https://nexonlibrary.com/upload/60741851d9e4f.jpg"
            alt="img_3"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <p className="common-text-bold text-uppercase">
            {t("AROUND_THE_WORLD")}
          </p>
          <p className="common-text-6">{t("WE_EXPANDED_PROJECT")}</p>
          <Button
            variant="outline"
            color="dark"
            rightIcon={<AiOutlineArrowRight />}
            className="button-see-more"
            onClick={() => navigate(routes.INTRO.INTRO_1)}
          >
            {t("READ_MORE")}
          </Button>
        </Grid.Col>
      </Grid>

      <Grid className="py-5">
        <Grid.Col span={4}>
          <p className="common-text-bold text-uppercase">
            {t("MONTHLY_BOOK_BOX")}
          </p>
          <p className="common-text-6">{t("OUR_WORK_DOESNT_END")}</p>
        </Grid.Col>
        <Grid.Col span={8}>
          <img
            src="https://nexonlibrary.com/upload/607418a63e719.jpg"
            alt="img_4"
          />
        </Grid.Col>
      </Grid>

      <Grid className="py-5">
        <Grid.Col span={8}>
          <img
            src="https://nexonlibrary.com/upload/62b00561a8bfa.jpg"
            alt="img_5"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default MoreAbout;
