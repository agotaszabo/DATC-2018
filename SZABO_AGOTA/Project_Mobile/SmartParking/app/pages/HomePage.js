// @flow
import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import {General }from "../styles/Colors";

export default class HomePage extends Component {

  render() {
    return (
      <ScrollView>
        <Text style={styles.container}> HOME PAGE </Text>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex:1,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300
  }
}