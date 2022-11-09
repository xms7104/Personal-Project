import React from "react";

import Issues from "../Issue/Issue";
import IssuesList from "../Issue/IssuesList";
import IssuesNoSearch from "../Issue/NoSearch";
import IssuesPage from "../Issue/Page";

export default {
  title: "Example/Issues",
  component: IssuesList,
  Issues,
  IssuesPage,
  IssuesNoSearch,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const List = (args: any) => <IssuesList {...args} />;
const Issue = (args: any) => <Issues {...args} />;
const Page = (args: any) => <IssuesPage {...args} />;
const NoSearch = (args: any) => <IssuesNoSearch {...args} />;

export const Issues_Data: any = Issue.bind({});
Issues_Data.args = {};

export const Issues_List: any = List.bind({});
Issues_List.args = {};

export const Issues_Page: any = Page.bind({});
Issues_Page.args = {};

export const Issues_NoSearch: any = NoSearch.bind({});
Issues_NoSearch.args = {};
