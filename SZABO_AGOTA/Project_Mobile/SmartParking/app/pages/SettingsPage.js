// @flow
import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import {General }from "../styles/Colors";

export default class SettingsPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}> SETTINGS PAGE </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    //backgroundColor: General.red
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  }
}