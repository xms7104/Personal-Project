import React from "react";

import IssueSelectList from "../IssuesSelectList";

export default {
  title: "Example/IssueSelectList",
  component: IssueSelectList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateIssueSelectList = (args: any) => <IssueSelectList {...args} />;

export const Issue_SelectList: any = TemplateIssueSelectList.bind({});
Issue_SelectList.args = {};
