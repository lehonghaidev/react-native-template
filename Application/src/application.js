import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';


import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons';

// import Example from './screens/Example';
// export default Example;

import Login from './screens/Login';
import Home from './screens/Home';
import Account from './screens/Account';
import Test from './screens/Test';


const Application = DrawerNavigator({
	Home: { screen: Home },
	Account: { screen: Account },
	Test: { screen: Test },
});


const App = StackNavigator(
	{
		Login: { 
			screen: Login,
			navigationOptions: ({ navigation }) => ({
				header: null,
				// title: "Login",
			}),
		},
		Application: {
			screen: Application, 
			navigationOptions: ({ navigation }) => ({
				header: null,
				// headerLeft: null,
				// title: "Application",
			}),
		}
	},
	{
		// headerMode: 'screen'
	}
);


export default App;