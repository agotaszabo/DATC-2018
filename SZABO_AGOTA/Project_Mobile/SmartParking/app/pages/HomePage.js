// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import {General }from "../styles/Colors";

export default class HomePage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Homepage </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    //backgroundColor: General.red
  }
}