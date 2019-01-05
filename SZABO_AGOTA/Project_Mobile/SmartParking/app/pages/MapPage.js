// @flow
import React, { Component } from 'react';
import { Button, Dimensions, View, ScrollView, Text } from 'react-native';
import { General } from '../styles/Colors';
import { GeneralStyle } from "../styles/Style";
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Marker } from 'react-native-maps';
import data from "../assets/constants";
import MapComponent from '../components/MapComponents';


export default class MapPage extends Component {
	constructor(props) {
    super(props);
    
    // this.state = {
		// 	coordinate: new AnimatedRegion({
		// 		latitude: LATITUDE,
		// 		longitude: LONGITUDE,
		// 	}),
		// };
	}

	render() {
		return (
			<View style={styles.container}>
        <ScrollView>
          <Text style={GeneralStyle.textTitle}> Search for a parking place </Text>
        
          <MapComponent/>
          
          <Text style={GeneralStyle.textTitle}> Search for a parking place </Text>
          <Text style={GeneralStyle.textTitle}> Search for a parking place </Text>

				</ScrollView>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: General.white,
	},
	map: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
		height: 350,
		width: Dimensions.get('window').width - 20,
		//absoluteFillObject,
	},
};
