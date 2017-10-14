import React from 'react';
import { StyleSheet, Text, View, BackHandler, ToastAndroid, Button } from 'react-native';
import Icon from 'react-native-vector-icons';

const CONFIG = require('./../config');

export default class Home extends React.Component {

	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
			<Icon.MaterialIcons
				name='home'
				size={24}
			/>
		),
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Home!</Text>
				<Button
					onPress={this.getMessage}
					title="Get message"
				/>
				<Button
					onPress={this.postMessage}
					title="Post message"
				/>
			</View>
		);
	}


	getMessage = () => {
		fetch(CONFIG.BASE_URL + '/message')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				ToastAndroid.show(responseJson.data.message, ToastAndroid.SHORT);
				return ;
			})
			.catch((error) => {
				console.error(error);
			});

	}
	
	postMessage = () => {
		var data = {
			name: "hai",
			age: "23"
		};
		request = new Request( CONFIG.BASE_URL + '/message', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})

		fetch(request)
			.then( (response) => response.json())

			.then(function (responseJson) {
				ToastAndroid.show(responseJson.data.message, ToastAndroid.SHORT);
			})
			.catch(function (error) {
				console.error(error);
			});

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
