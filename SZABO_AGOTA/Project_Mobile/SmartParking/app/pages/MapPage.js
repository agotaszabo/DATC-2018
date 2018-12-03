// @flow
import React, { Component } from "react";
import {Button, View, ScrollView, Text } from "react-native";
import {General }from "../styles/Colors";

export default class MapPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}> MAP PAGE </Text>

            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
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
    marginTop: 300
  }
}