import React, { useEffect, useState } from "react";

import Stories from "react-insta-stories";
import { Modal, Image } from "semantic-ui-react";
interface Props {
  trigger: any;
  stories: any;
}
const StoryViewer: React.FunctionComponent<Props> = ({ trigger, stories }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      centered={true}
      size="mini"
      trigger={trigger}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Stories
        onStoryStart={() => console.log("STORY _ Started")}
        onStoryEnd={() => console.log("STORY _ Eneded")}
        onAllStoriesEnd={() => console.log("STORY _ All Stories")}
        stories={stories}
        width={432}
        height={768}
      />
    </Modal>
  );
};

export default StoryViewer;
