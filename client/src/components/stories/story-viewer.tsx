import React from "react";
import Stories from "react-insta-stories";
import { Story } from "../../types/story";

interface Props {
  handleNext: Function;
  stories: Story[];
}

const StoryViewer: React.FunctionComponent<Props> = ({
  handleNext,
  stories,
}) => {
  console.log(stories);
  return (
    <>
      <Stories
        onAllStoriesEnd={() => {
          handleNext();
        }}
        stories={stories}
        width={432}
        height={768}
      />
    </>
  );
};

export default StoryViewer;
