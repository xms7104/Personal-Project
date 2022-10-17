import React from "react";

import Issues from "../Issues";

export default {
  title: "Example/Issues",
  component: Issues,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateIssues = (args: any) => <Issues {...args} />;

export const IssueList: any = TemplateIssues.bind({});
IssueList.args = {};
