import React from "react";

import CreateIssueSelectList from "../CreateIssue/IssuesSelectList";
import CreateIssue from "../CreateIssue/NewIssue";

export default {
  title: "Example/CreateIssue",
  component: CreateIssueSelectList,
  CreateIssue,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const SelectList = (args: any) => <CreateIssueSelectList {...args} />;

const CreateText = (args: any) => <CreateIssue {...args} />;

export const Issue_Create: any = CreateText.bind({});
Issue_Create.args = {};

export const Issue_SelectList: any = SelectList.bind({});
Issue_SelectList.args = {};
