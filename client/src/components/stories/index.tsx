import React from "react";
import { Segment, Image } from "semantic-ui-react";
import { data } from "../../data/mock";

const StoryContainer = () => {
  return (
    <Segment>
      <Image.Group>
        {data.map((elem, index) => {
          let className = !elem.stories.visited ? "border" : "";
          return (
            <Image
              key={"" + index}
              src={elem.profilePic}
              className={"size "+className}
              circular
            />
          );
        })}
      </Image.Group>
    </Segment>
  );
};

export default StoryContainer;
