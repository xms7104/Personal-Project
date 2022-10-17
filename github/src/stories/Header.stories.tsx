import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderSearch from "../HeaderSearch";
import HeaderPCMenu from "../HeaderPCMenu";
import HeaderUserMenuPC from "../HeaderUserMenuPC";
import HeaderUserMenuPCNoSign from "../HeaderUserMenuPCNoSign";
import HeaderMobileMenu from "../HeaderMobileMenu";
import HeaderUserMenuMobile from "../HeaderUserMenuMobile";


export default {
  title: "Example/Header",
  component: HeaderLogo,
  HeaderSearch,
  HeaderPCMenu,
  HeaderUserMenuPC,
  HeaderUserMenuPCNoSign,
  HeaderMobileMenu,
  HeaderUserMenuMobile,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateHeaderLogo = (args:any) => <HeaderLogo {...args} />;
const TemplateHeaderSearch = (args:any) => <HeaderSearch {...args} />;
const TemplateHeaderPCMenu = (args:any) => <HeaderPCMenu {...args} />;
const TemplateHeaderUserMenuPC = (args:any) => <HeaderUserMenuPC {...args} />;
const TemplateHeaderUserMenuPCNoSign = (args:any) => <HeaderUserMenuPCNoSign {...args} />;
const TemplateHeaderMobileMenu = (args:any) => <HeaderMobileMenu {...args} />;
const TemplateHeaderUserMenuMobile = (args:any) => <HeaderUserMenuMobile {...args} />;

export const Template_HeaderLogo:any = TemplateHeaderLogo.bind({});
Template_HeaderLogo.args = {};


export const Template_HeaderSearch:any = TemplateHeaderSearch.bind({});
Template_HeaderSearch.args = {};

export const Template_HeaderPCMenu:any = TemplateHeaderPCMenu.bind({});
Template_HeaderPCMenu.args = {};

export const Template_HeaderUserMenuPC:any = TemplateHeaderUserMenuPC.bind({});
Template_HeaderUserMenuPC.args = {};

export const Template_HeaderUserMenuPCNoSign:any = TemplateHeaderUserMenuPCNoSign.bind({});
Template_HeaderUserMenuPCNoSign.args = {};

export const Template_HeaderMobileMenu:any = TemplateHeaderMobileMenu.bind({});
Template_HeaderMobileMenu.args = {};

export const Template_HeaderUserMenuMobile:any = TemplateHeaderUserMenuMobile.bind({});
Template_HeaderUserMenuMobile.args = {};