import { Grid } from "@mantine/core";
import { Story } from "../../constants/type";

interface IStoriesList {
  data: Story[];
  storyType: string;
}

const StoriesList = ({ data, storyType }: IStoriesList) => {
  const getDisplayData = () => {
    return data.filter((item) => {
      return item.type === storyType;
    });
  };

  const displayStories = storyType === "ALL" ? data : getDisplayData();

  return (
    <Grid className="stories-list" gutter={30}>
      {displayStories.map((item, idx) => {
        return (
          <Grid.Col key={idx} span={4} >
            <img src={item.imageUrl} alt="story-img" />
            <p className="common-text-5-bold mb-0 mt-3">{item.title}</p>
            <p className="common-text-5">{item.subtitle}</p>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default StoriesList;
