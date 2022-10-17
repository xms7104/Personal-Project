import React from "react";

import CreateNewIssue from "../NewIssue";

export default {
  title: "Example/CreateNewIssue",
  component: CreateNewIssue,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const NewIssue_Create = (args: any) => <CreateNewIssue {...args} />;

export const Create_NewIssue: any = NewIssue_Create.bind({});
Create_NewIssue.args = {};
