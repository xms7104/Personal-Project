import React from "react";

import RepoFunctional from "../Repo/Functional";
import RepoFunctionalElement from "../Repo/RepoFunctionalElement";
import RepoAndUserName from "../Repo/RepoNameAndUserName";

export default {
  title: "Example/Repo",
  component: RepoFunctional,
  RepoFunctionalElement,
  RepoAndUserName,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Functional = (args: any) => <RepoFunctional {...args} />;

const FunctionalElement = (args: any) => <RepoFunctionalElement {...args} />;

const RepoNameAndUserName = (args: any) => <RepoAndUserName {...args} />;

export const Repo_Functional: any = Functional.bind({});
Repo_Functional.args = {};

export const Repo_FunctionalElement: any = FunctionalElement.bind({});
Repo_FunctionalElement.args = {};

export const Repo_RepoAndUserName: any = RepoNameAndUserName.bind({});
Repo_RepoAndUserName.args = {};
