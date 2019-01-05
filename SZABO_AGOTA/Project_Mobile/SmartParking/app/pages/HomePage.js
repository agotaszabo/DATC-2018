// @flow
import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import {General }from "../styles/Colors";
import {GeneralStyle} from "../styles/Style";
import data from "../assets/constants";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      <ScrollView>
        <Text style={GeneralStyle.textTitle}> {data.HomePage.Title} </Text>
        <Text style={GeneralStyle.textDescription}>{data.HomePage.Text1}</Text>
        <Text style={GeneralStyle.textDescription}>{data.HomePage.Text2}</Text>
        <Image source={{uri: 'https://media.giphy.com/media/3oKGzApIBl3UyNo7Cw/giphy.gif'}} style={{width: 300, height:300, alignSelf: "center" }} />
        <Text style={GeneralStyle.textDescription}> HOME PAGE </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: General.white
  }
}