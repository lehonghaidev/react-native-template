import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons';

export default class Account extends React.Component {

	static navigationOptions = {
		drawerLabel: 'Account',
		drawerIcon: ({ tintColor }) => (
			<Icon.MaterialIcons
				name='account-circle'
				size={24}
			/>
		),
	}

	constructor(props) {
		super(props);
	}
	
	componentWillMount() {

	}

	componentDidMount() {

	}
	render() {
		return (
			<View style={styles.container}>


				<Text>Account screen!</Text>
			</View>
		);
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
