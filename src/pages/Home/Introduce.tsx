import { Grid } from "@mantine/core";
import { useTranslation } from "react-i18next";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Introduce = ():JSX.Element => {
  const { t } = useTranslation();
  return (
    <Grid className="introduce-content">
      <ProgressBar step={1} />
      <Grid.Col span={8}>
        <p className="common-text">{t("READING_IS_RIGHT")}</p>

        <p
          style={{
            fontSize: "44px",
            color: "#2e2e2e",
            position: "absolute",
          }}
        >
          {t("MAGIC_PLACE")}
        </p>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "700",
            color: "#4b89dc",
            marginTop: "200px",
          }}
        >
          {t("NEXON_LIBRARY")}
        </h1>
      </Grid.Col>
      <Grid.Col span={4}>
        <img
          src="https://nexonlibrary.com/upload/626213c00af41.jpg"
          alt="intro-img"
        />
      </Grid.Col>
      <Grid.Col span={4}></Grid.Col>

      <Grid.Col span={4}>
        <div className="bottom-image">
          <img
            src="https://nexonlibrary.com/upload/62625704746d3.jpg"
            alt="intro-img"
          />
          <img
            src="https://nexonlibrary.com/upload/626212e5a2a45.jpg"
            alt="intro-img"
          />
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default Introduce;
