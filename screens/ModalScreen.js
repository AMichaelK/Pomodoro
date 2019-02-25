import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';

export default class ModalScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      index: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    const { navigation } = this.props;
    this.setState({ index: selectedIndex }, () => {
      if (selectedIndex == 0) { // Yes, return to Settings page
        navigation.navigate('Settings');
      }
      else if (selectedIndex == 1) { // No, go back to Timer
        navigation.goBack();
      }
    })
  }

  render() {
    const buttons = ['Yes', 'No']
    const { index } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}>Are you sure?</Text>
        <Text style={styles.bodyText}>This will reset your progress!</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={index}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'Merriweather',
    fontSize: 32,
    fontWeight: 'bold',
  },
  bodyText: {
    fontFamily: 'OpenSans',
    fontSize: 18,
  }
});