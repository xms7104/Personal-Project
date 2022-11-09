import React from "react";

import CreateLabel from "../LabelManagement/CreateLabel";
import NewLabelBtn from "../LabelManagement/NewLabelCreatrBtn";
import CreateLabelFunctional from "../LabelManagement/NewLabelFunctional";
import CreateLabelSearch from "../LabelManagement/NewLabelSearch";
import LabelsData from "../LabelManagement/LabelsData";

export default {
  title: "Example/LabelManagement",
  component: LabelsData,
  CreateLabel,
  NewLabelBtn,
  CreateLabelFunctional,
  CreateLabelSearch,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Label = (args: any) => <LabelsData {...args} />;
const Create_Label = (args: any) => <CreateLabel {...args} />;
const Create_Btn = (args: any) => <NewLabelBtn {...args} />;
const Label_Functional = (args: any) => <CreateLabelFunctional {...args} />;
const Label_Search = (args: any) => <CreateLabelSearch {...args} />;

export const Labels: any = Label.bind({});
Labels.args = {};

export const Create: any = Create_Label.bind({});
Create.args = {};

export const CreateBtn: any = Create_Btn.bind({});
CreateBtn.args = {};

export const LabelFunctional: any = Label_Functional.bind({});
LabelFunctional.args = {};

export const LabelSearch: any = Label_Search.bind({});
LabelSearch.args = {};
