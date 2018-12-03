// @flow
import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import {General }from "../styles/Colors";

export default class HomePage extends Component {

  render() {
    return (
      <View style={styles.container}>
      
      <ScrollView>
        <Text style={styles.text}> HOME PAGE </Text>
        <Text style={styles.text}> HOME PAGE </Text>
        <Text style={styles.text}> HOME PAGE </Text>
        <Text style={styles.text}> HOME PAGE </Text>
      </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: General.white
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
    color: General.oxford_blue
  }
}