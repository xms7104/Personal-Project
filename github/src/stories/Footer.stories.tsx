import React from "react";
import Footer from "../footer";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args:any) => (
    <Footer {...args} />
);

export const Footers:any = Template.bind({});
Footers.args = {};
