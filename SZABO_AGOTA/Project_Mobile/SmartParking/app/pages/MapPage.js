// @flow
import React, { Component } from 'react';
import { Button, Dimensions, View, ScrollView, Text } from 'react-native';
import { General } from '../styles/Colors';
import { GeneralStyle } from '../styles/Style';
import MapComponent from '../components/MapComponents';
import data from '../assets/constants';

export default class MapPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Text style={[GeneralStyle.textTitle, {marginBottom: 20}]}> {data.MapPageCoordinates.Title} </Text>
					<MapComponent />
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
	},
};
