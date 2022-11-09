import React from "react";

import IssueDetailTimeLine from "../IssueDetail/TimeLineDemo";

import IssueDetailState from "../IssueDetail/State";

import IssueDetailComment from "../IssueDetail/IssueComment";

export default {
  title: "Example/IssuesDetail",
  component: IssueDetailTimeLine,
  IssueDetailState,
  IssueDetailComment,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TimeLine = (args: any) => <IssueDetailTimeLine {...args} />;
const State = (args: any) => <IssueDetailState {...args} />;
const Comment = (args: any) => <IssueDetailComment {...args} />;

export const IssueDetail_TimeLine: any = TimeLine.bind({});
IssueDetail_TimeLine.args = {};

export const IssueDetail_State: any = State.bind({});
IssueDetail_State.args = {
  state: "open",
  reason: "reopened",
};

export const IssueDetail_Comment: any = Comment.bind({});
IssueDetail_Comment.args = {};
