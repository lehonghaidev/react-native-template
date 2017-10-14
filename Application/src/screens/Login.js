import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default class LoginScreen extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Login Screen!</Text>
				<Button
					onPress={this.loginHandle}
					title="Login"
				/>
			</View>
		);
	}


	loginHandle = () => {
		this.props.navigation.navigate('Application', { id: '000' })
	}
}


