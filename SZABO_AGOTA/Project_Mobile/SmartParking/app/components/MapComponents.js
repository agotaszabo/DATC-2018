import React, { Component } from 'react';
import { Button, Dimensions, View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { General } from '../styles/Colors';
import { GeneralStyle } from '../styles/Style';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Marker } from 'react-native-maps';
import data from '../assets/constants';


export default class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPressed: false,
			MarkerName: ' ',
			MarkerDescription: ' ',
			MarkerState: ' ',
		};
	}

	render() {
		return (
			<View>
				<MapView
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					region={{
						latitude: data.MapPageCoordinates.LATITUDE,
						longitude: data.MapPageCoordinates.LONGITUED,
						latitudeDelta: data.MapPageCoordinates.LATITUDE_DELTA,
						longitudeDelta: data.MapPageCoordinates.LONGITUDE_DELTA,
					}}
					onPress={() => {
						this.setState({ isPressed: false, MarkerName: ' ', MarkerDescription: ' ' });
					}}
				>
					{data.markers.map(marker => (
						<MapView.Marker
							coordinate={marker.coordinates}
							title={marker.title}
							pinColor={marker.state ? General.green : General.red}
							onPress={() => {
								this.setState({ isPressed: true, MarkerName: marker.title, MarkerDescription: 'blabla' });
							}}
						/>
					))}
				</MapView>

				<Text>{this.state.isPressed ? this.state.MarkerName + '\n' + this.state.MarkerDescription : ' '}</Text>
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
		marginTop: 10,
		height: 350,
		width: Dimensions.get('window').width - 20,
	}
};
