// @flow
import React, { Component } from 'react';
import { Button, View, ScrollView, Text } from 'react-native';
import { General } from '../styles/Colors';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
        <ScrollView>
          <Text style={styles.textTitle}> Map page </Text>
					<MapView
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
					/>
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
  textTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: General.oxford_blue
  },
	map: {
		height: 400,
		width: 400,
		//absoluteFillObject,
	},
};
