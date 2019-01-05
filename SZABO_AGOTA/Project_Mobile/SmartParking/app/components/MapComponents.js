import React, { Component } from 'react';
import { Button, Dimensions, View, ScrollView, Text } from 'react-native';
import { General } from '../styles/Colors';
import { GeneralStyle } from '../styles/Style';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Marker } from 'react-native-maps';
import data from '../assets/constants';

export default class MapComponent extends Component {
	render() {
		return (
			<MapView
				provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
					latitude: 45.753733,
					longitude: 21.226926,
					latitudeDelta: 0.001,
					longitudeDelta: 0.001,
                }}>
				
				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P1_lat,
						longitude: data.MapPageCoordinates.P1_long,
					}}
					title="P1"
					pinColor = {General.red}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P2_lat,
						longitude: data.MapPageCoordinates.P2_long,
					}}
					title="P2"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P3_lat,
						longitude: data.MapPageCoordinates.P3_long,
					}}
					title="P3"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P4_lat,
						longitude: data.MapPageCoordinates.P4_long,
					}}
					title="P4"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P5_lat,
						longitude: data.MapPageCoordinates.P5_long,
					}}
					title="P5"
					pinColor={General.red}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P6_lat,
						longitude: data.MapPageCoordinates.P6_long,
					}}
					title="P6"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P7_lat,
						longitude: data.MapPageCoordinates.P7_long,
					}}
					title="P7"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P8_lat,
						longitude: data.MapPageCoordinates.P8_long,
					}}
					title="P8"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P9_lat,
						longitude: data.MapPageCoordinates.P9_long,
					}}
					title="P9"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P10_lat,
						longitude: data.MapPageCoordinates.P10_long,
					}}
					title="P10"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P11_lat,
						longitude: data.MapPageCoordinates.P11_long,
					}}
					title="P11"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P12_lat,
						longitude: data.MapPageCoordinates.P12_long,
					}}
					title="P12"
					pinColor={General.green}
				/>

				<Marker.Animated
					ref={marker => {
						this.marker = marker;
					}}
					coordinate={{
						latitude: data.MapPageCoordinates.P13_lat,
						longitude: data.MapPageCoordinates.P13_long,
					}}
					title="P13"
					pinColor={General.green}
				/>
				
			</MapView>
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
