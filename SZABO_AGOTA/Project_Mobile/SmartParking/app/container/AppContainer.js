//@flow
import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import MapPage from "../pages/MapPage";
import { General } from "../styles/Colors";

export const Tab = TabNavigator({
  Home: {screen: HomePage},
  Map: {screen: MapPage},
  Settings: {screen: SettingsPage}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: General.independence
    },
    activeTintColor: General.sea_serpent,
    inactiveTintColor: General.oxford_blue,
    labelStyle: {
      fontSize: 15,
      fontWeight: '900'
    },
    style: {
      backgroundColor: General.independence,
    },
  }
});

