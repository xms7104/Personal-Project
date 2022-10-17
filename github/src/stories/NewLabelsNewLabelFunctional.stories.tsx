import React from "react";

import NewLabelFunctional from "../NewLabelFunctional";
import NewLabelSearch from "../NewLabelSearch";
import NewLabelCreatrBtn from "../NewLabelCreatrBtn";

export default {
  title: "Example/NewLabel",
  component: NewLabelFunctional,
  NewLabelSearch,
  NewLabelCreatrBtn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateNewLabelFunctional = (args:any) => <NewLabelFunctional {...args} />;
const TemplateNewLabelSearch = (args:any) => <NewLabelSearch {...args} />;
const TemplateNewLabelCreatrBtn = (args:any) => <NewLabelCreatrBtn {...args} />;

export const Template_NewLabelFunctional:any = TemplateNewLabelFunctional.bind({});
Template_NewLabelFunctional.args = {};


export const Template_NewLabelSearch:any = TemplateNewLabelSearch.bind({});
Template_NewLabelSearch.args = {};

export const Template_NewLabelCreatrBtn:any = TemplateNewLabelCreatrBtn.bind({});
Template_NewLabelCreatrBtn.args = {};
