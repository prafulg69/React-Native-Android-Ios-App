/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import NHForm from "./components/form/";
import TextArea from "./components/form/textArea";
import ListSwipe from "./components/listSwipe/";
import NHList from "./components/list/";
import NHTab from "./components/tab/";
import SideBar from "./components/sidebar";
import Segment from "./components/segment";


const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    NHForm: { screen: NHForm },
    TextArea: { screen: TextArea },
    NHList: { screen: NHList },
    ListSwipe: { screen: ListSwipe },
    NHTab: { screen: NHTab },
    Segment: { screen: Segment }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
