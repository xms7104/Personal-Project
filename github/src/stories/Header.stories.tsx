import React from "react";

import Logo from "../Header/headerLogo";
import MobileMenu from "../Header/HeaderMobileMenu";
import Search from "../Header/HeaderSearch";
import SignIn from "../Header/HeaderSignIn";
import SignOut from "../Header/HeaderSignOut";
export default {
  title: "Example/header",
  component: Logo,
  MobileMenu,
  Search,
  SignIn,
  SignOut,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Header_Logo = (args: any) => <Logo {...args} />;
const Header_MobileMenu = (args: any) => <MobileMenu {...args} />;
const Header_Search = (args: any) => <Search {...args} />;
const Header_SignIn = (args: any) => <SignIn {...args} />;
const Header_SignOut = (args: any) => <SignOut {...args} />;

export const HeaderLogo: any = Header_Logo.bind({});
HeaderLogo.args = {};

export const HeaderSearch: any = Header_Search.bind({});
HeaderSearch.args = {};

export const HeaderSignIn: any = Header_SignIn.bind({});
HeaderSignIn.args = {};

export const HeaderSignOut: any = Header_SignOut.bind({});
HeaderSignOut.args = {};

export const HeaderMobileMenu: any = Header_MobileMenu.bind({});
HeaderMobileMenu.args = {};
