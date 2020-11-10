import { Story } from "../types/story";

const rawData = [
  {
    user: "yassine",
    handler: "@yassine",
    profilePic:
      "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg",
    stories: {
      type: "image",
      url:
        "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png",
      createdAt: "",
      visited: false,
    },
  },
  {
    user: "anass",
    handler: "@anass",
    profilePic:
      "https://i.pinimg.com/736x/fd/1f/79/fd1f79bccedb91b28bebeaf2f84159f3.jpg",
    stories: {
      type: "image",
      url:
        "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png",
      createdAt: "",
      visited: true,
    },
  },
  {
    user: "oum",
    handler: "@oum",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
    stories: {
      type: "image",
      url:
        "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png",
      createdAt: "",
      visited: false,
    },
  },
  {
    user: "hamza",
    handler: "@hamza",
    profilePic:
      "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg",
    stories: {
      type: "image",
      url:
        "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png",
      createdAt: "",
      visited: true,
    },
  },
];
rawData.sort((a: Story, b: Story) => {
  let leftOp: number = a.stories.visited ? 1 : 0;
  let rightOp: number = b.stories.visited ? 1 : 0;
  return leftOp - rightOp;
});
export const data = rawData;
