import React from "react";

import CreateIssueItemList from "../ItemList";

export default {
  title: "Example/CreateIssueItemList",
  component: CreateIssueItemList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const CreateIssue_ItemList = (args: any) => <CreateIssueItemList {...args} />;

export const ItemList: any = CreateIssue_ItemList.bind({});
ItemList.args = {
  data: [
    {
      name: "Xie-MS",
      avatar_url: "https://avatars.githubusercontent.com/u/82010307?s=80&v=4",
    },
    {
      name: "emil0519",
      avatar_url: "https://avatars.githubusercontent.com/u/97882056?v=4",
    },
  ],
};
