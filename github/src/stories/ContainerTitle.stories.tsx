import React from "react";

import RepoFunctionalElement from "../RepoFunctionalElement";
import Functional from "../Functional";

export default {
  title: "Example/ContainerTitle",
  component: RepoFunctionalElement,
  Functional,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateRepoFunctionalElement = (args:any) => <RepoFunctionalElement {...args} />;
const TemplateFunctional = (args:any) => <Functional {...args} />;

export const RepoFunctionalElements:any = TemplateRepoFunctionalElement.bind({});
RepoFunctionalElements.args = {};


export const Functionals:any = TemplateFunctional.bind({});
Functionals.args = {};
