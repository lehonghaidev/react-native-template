import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, ViewPagerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons';

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,

  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffff00',
  },
  pageStyle2: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff00ff',
  },

});

export default class Test extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Icon.MaterialCommunityIcons
        name='test-tube'
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

      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}>
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle2}>
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>


    );
  }

}
