export interface Story {
  type: string;
  url: string;
  createdAt: string;
  visited: boolean;
}

export interface StoryType {
  user: string;
  handler: string;
  profilePic: string;
  stories: Story[];
}
