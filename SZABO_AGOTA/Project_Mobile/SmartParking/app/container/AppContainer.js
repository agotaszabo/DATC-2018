//@flow
import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import MapPage from "../pages/MapPage";

export const Tab = TabNavigator({
  Home: {
    screen: HomePage,
  },
  First: {
    screen: MapPage,
  },
  Second: {
    screen: SettingsPage,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 12,
    }
  }
});

