import React from "react";
import { Segment, Image } from "semantic-ui-react";
import { data } from "../../data/mock";
import StoryViewer from "./story-viewer";

const StoryContainer = () => {
  return (
    <Segment>
      <Image.Group>
        {data.map((elem, index) => {
          let className = !elem.stories[0].visited ? "border" : "";
          return (
            <StoryViewer
              key={"" + index}
              stories={elem.stories}
              trigger={
                <Image
                  src={elem.profilePic}
                  className={"size " + className}
                  circular
                />
              }
            />
          );
        })}
      </Image.Group>
    </Segment>
  );
};

export default StoryContainer;
