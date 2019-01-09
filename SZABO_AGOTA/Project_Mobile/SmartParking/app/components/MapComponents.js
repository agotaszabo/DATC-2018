import React, { Component } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { General } from '../styles/Colors';
import MapView, { PROVIDER_GOOGLE, ProviderPropType } from 'react-native-maps';
import pinblue from '../assets/pinblue.png'
import pinred from '../assets/pinred.png'
import mapData from '../assets/constants';
import { callApi, Endpoints } from '../../common/redux/api';

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

	componentWillMount() {
		this.timer = setInterval(() => {this.getData()},1000);
	}

	getData() {
		callApi(Endpoints.getAllData)
			.then(payload => {
				this.setState({ data: payload });
			})
			.catch(error => console.log(error));
	}

	getImage(marker) {
		return marker.currentState === 'free' ? pinblue : pinred
	}

	getMarkerKey(marker) {
		return toString(Math.random() * 1000)
	}

	render() {
		let data = this.state.data;
		let payload;

		if (data) {
			payload = data.payload;
		} else {
			payload = [];
		}

		console.log(payload)

		return (
			<View>
				<MapView
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					loadingEnabled={true}
					region={{
						latitude: mapData.MapPageCoordinates.LATITUDE,
						longitude: mapData.MapPageCoordinates.LONGITUDE,
						latitudeDelta: mapData.MapPageCoordinates.LATITUDE_DELTA,
						longitudeDelta: mapData.MapPageCoordinates.LONGITUDE_DELTA,
					}}
					onPress={() => {
						this.setState({ isPressed: false, MarkerName: ' ', MarkerDescription: ' ' });
					}}
				>
					{payload.map(marker =>
						marker ? (
							<MapView.Marker
								coordinate={{
									latitude: parseFloat(marker.latitude),
									longitude: parseFloat(marker.longitude),
								}}
								title={marker.name}
								key={this.getMarkerKey(marker)}
								image={ this.getImage(marker) }
								onPress={() => {
									this.setState({
										isPressed: true,
										MarkerName: marker.name,
										MarkerDescription: marker.currentState,
									});
								}}
							/>
						) : (
							''
						)
					)}
				</MapView>

				{this.state.isPressed ? (
					<View>
						<Text style={[{ marginTop: 10 }, styles.detailsText]}>
							{'Parking space name: ' + this.state.MarkerName}
						</Text>
						<Text style={styles.detailsText}>Details: </Text>
						<Text style={styles.detailsText}>{'\t\t' + this.state.MarkerDescription}</Text>
					</View>
				) : null}
			</View>
		);
	}
}

MapComponent.propTypes = {
	provider: ProviderPropType,
  };

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
	},
	detailsView: {
		// padding: 2.5,
		marginLeft: 5,
		marginRight: 5,
		// color: General.oxford_blue,
		// backgroundColor: General.sea_serpent,
		borderColor: General.deep_koamaru,
		borderWidth: 1,
	},
	detailsText: {
		marginLeft: 10,
		marginright: 10,
		fontSize: 15,
		fontWeight: 'normal',
		color: General.oxford_blue,
	},
};
