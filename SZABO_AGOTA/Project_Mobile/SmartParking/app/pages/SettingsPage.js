// @flow
import React, { Component } from "react";
import { View, ScrollView, Text, Linking, Image} from "react-native";
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
          <Text style={GeneralStyle.textTitle}> {data.SettingsPage.Title} </Text>
          <Text style={GeneralStyle.textDescription}>{data.SettingsPage.Text1}</Text>
          <Text style={GeneralStyle.textDescription}>{data.SettingsPage.Text2}</Text>
          
          <Text style={GeneralStyle.textLink} 
            onPress={() => Linking.openURL('mailto:agotaszabo@live.com?subject=Send Suggestions') } title="agotaszabo@live.com">
            {data.SettingsPage.Text3}
          </Text>

          <Text style={GeneralStyle.textLink} 
            onPress={() => Linking.openURL('mailto:agotaszabo@live.com?subject=Report Problem') } title="agotaszabo@live.com">
            {data.SettingsPage.Text4}
          </Text>

          <Text style={GeneralStyle.textTitle}> {data.SettingsPage.Title2} </Text>
          <Text style={GeneralStyle.textDescription}>{data.SettingsPage.Text5}</Text>
          
          <Text style={GeneralStyle.textList}>{data.SettingsPage.Text6}</Text>
          <Text style={GeneralStyle.textList}>{data.SettingsPage.Text7}</Text>
          <Text style={GeneralStyle.textList}>{data.SettingsPage.Text8}</Text>
          
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