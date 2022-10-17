import React from "react";

import LabelsData from "../LabelManagement/LabelsData";

export default {
  title: "Example/LabelsData",
  component: LabelsData,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateLabelsData = (args: any) => <LabelsData {...args} />;

export const Template_LabelsData: any = TemplateLabelsData.bind({});
Template_LabelsData.args = {};
