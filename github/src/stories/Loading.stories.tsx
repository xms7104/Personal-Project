import React from "react";

import Loading from "../Loading";

export default {
  title: "Example/Loading",
  component: Loading,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const LoadingPage = (args: any) => <Loading {...args} />;

export const loading: any = LoadingPage.bind({});
loading.args = {};
