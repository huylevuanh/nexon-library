import { useState } from "react";
import { Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader/PageHeader";
import StoriesList from "./StoriesList";

import { storiesData } from "../../constants";
import "./Stories.scss";

const Stories = (): JSX.Element => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState("ALL");
  return (
    <div className="stories-page-container">
      <PageHeader
        backgroundUrl="https://nexonlibrary.com/assets/front/images/bg_sub_story.jpg"
        title="STORIES"
        subtitle="WHAT_NEW_AT_NEXON_LIBRARY"
      />
      <div className="main-layout stories-list-tabs-container">
        <Tabs
          value={tabValue}
          onTabChange={(value: string) => {
            setTabValue(value);
          }}
        >
          <Tabs.List>
            <Tabs.Tab
              value="ALL"
              className="w-25 border rounded-0 text-uppercase"
            >
              {t("ALL")}
            </Tabs.Tab>
            <Tabs.Tab
              value="SMB"
              className="w-25 border rounded-0 text-uppercase"
            >
              {t("SMALL_LIBRARY")}
            </Tabs.Tab>
            <Tabs.Tab
              value="ARW"
              className="w-25 border rounded-0 text-uppercase"
            >
              {t("AROUND_THE_WORLD")}
            </Tabs.Tab>
            <Tabs.Tab
              value="PRO"
              className="w-25 border rounded-0 text-uppercase"
            >
              {t("PROGRAMS")}
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <StoriesList data={storiesData} storyType={tabValue} />
      </div>
    </div>
  );
};

export default Stories;
