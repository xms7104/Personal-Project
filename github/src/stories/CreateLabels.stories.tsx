import React from "react";

import CreateLabelsDisabled from "../CreateLabelsInformationDisabled";
import CreateLabels from "../CreateLabelsInformation";

export default {
  title: "Example/CreateLabels",
  component: CreateLabelsDisabled,
  CreateLabels,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateCreateLabelsDisabled = (args:any) => <CreateLabelsDisabled {...args} />;
const TemplateCreateLabels = (args:any) => <CreateLabels {...args} />;


export const Template_CreateLabelsDisabled:any = TemplateCreateLabelsDisabled.bind({});
Template_CreateLabelsDisabled.args = {};

export const Template_CreateLabels:any = TemplateCreateLabels.bind({});
Template_CreateLabels.args = {};