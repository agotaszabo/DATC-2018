// @flow
import React, { Component } from "react";
import { View, ScrollView, Text, Linking } from "react-native";
import {General }from "../styles/Colors";
import {GeneralStyle} from "../styles/Style";
import texts from "../assets/constants";

export default class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={GeneralStyle.textTitle}> {texts.SettingsPage.Title} </Text>
          <Text style={GeneralStyle.textDescription}>{texts.SettingsPage.Text1}</Text>
          <Text style={GeneralStyle.textDescription}>{texts.SettingsPage.Text2}</Text>
          
          <Text style={GeneralStyle.textLink} 
            onPress={() => Linking.openURL('mailto:agotaszabo@live.com?subject=Send Suggestions') } title="agotaszabo@live.com">
            {texts.SettingsPage.Text3}
          </Text>

          <Text style={GeneralStyle.textLink} 
            onPress={() => Linking.openURL('mailto:agotaszabo@live.com?subject=Report Problem') } title="agotaszabo@live.com">
            {texts.SettingsPage.Text4}
          </Text>

          <Text style={GeneralStyle.textTitle}> {texts.SettingsPage.Title2} </Text>
          <Text style={GeneralStyle.textDescription}>{texts.SettingsPage.Text5}</Text>
          
          <Text style={GeneralStyle.textList}>{texts.SettingsPage.Text6}</Text>
          <Text style={GeneralStyle.textList}>{texts.SettingsPage.Text7}</Text>
          <Text style={[{ marginBottom: 15}, GeneralStyle.textList]}>{texts.SettingsPage.Text8}</Text>
        

        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: General.white,
  }
}