// @flow
import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import {General }from "../styles/Colors";
import data from "../assets/constants";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      <ScrollView>
        <Text style={styles.textTitle}> {data.HomePage.Title} </Text>
        <Text style={styles.textDescription}>{data.HomePage.Text1}</Text>
        <Text style={styles.textDescription}>{data.HomePage.Text2}</Text>
        <Image source={{uri: 'https://media.giphy.com/media/3oKGzApIBl3UyNo7Cw/giphy.gif'}} style={{width: 300, height:300, alignSelf: "center" }} />
        <Text style={styles.textDescription}> HOME PAGE </Text>
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
  textTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: General.oxford_blue
  },
  textDescription: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    color: General.oxford_blue
  }
}