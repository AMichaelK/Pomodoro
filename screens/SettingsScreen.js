import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Picker } from 'react-native';
import { Text, Slider, Button } from 'react-native-elements';

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      focusMinutes: 0,
      focusSeconds: 0,
      breakMinutes: 0,
      breakSeconds: 0,
    }
  }

  static navigationOptions = {
    title: 'Timer',
  };


  componentWillUnmount() {
    clearInterval(this.timerFunction);
  }

  getInfo() {
    return {
      minutes: this.state.focusMinutes,
      seconds: this.state.focusSeconds,
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Focus duration
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.bodyText}>
            Minutes: {this.state.focusMinutes}
          </Text>
          <Slider
            thumbTintColor="#298745"
            value={this.state.focusMinutes}
            onValueChange={value => this.setState({ focusMinutes: value })}
            maximumValue={60}
            step={1}
          />
          <Text style={styles.bodyText}>
            Seconds: {this.state.focusSeconds}
          </Text>
          <Slider
            thumbTintColor="#298745"
            value={this.state.focusSeconds}
            onValueChange={value => this.setState({ focusSeconds: value })}
            maximumValue={59}
            step={1}
          />
        </View>
        <View style={{ flex: 1, marginTop: -20, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Break duration
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.bodyText}>
            Minutes: {this.state.breakMinutes}
          </Text>
          <Slider
            thumbTintColor="#298745"
            value={this.state.breakMinutes}
            onValueChange={value => this.setState({ breakMinutes: value })}
            maximumValue={60}
            step={1}
          />
          <Text style={styles.bodyText}>
            Seconds: {this.state.breakSeconds}
          </Text>
          <Slider
            thumbTintColor="#298745"
            value={this.state.breakSeconds}
            onValueChange={value => this.setState({ breakSeconds: value })}
            maximumValue={59}
            step={1}
          />
        </View>
        <Button
          title='Submit'
          raised={true}
          onPress={
            () => navigate('Timing', this.getInfo())
          }>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    margin: 20,
    marginTop: -10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'Merriweather',
    fontSize: 28,
    fontWeight: 'bold',
  },
  bodyText: {
    fontFamily: 'OpenSans',
    fontSize: 18,
  }
});



{/* <Picker
            selectedValue={this.state.minutesChoice}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ minutesChoice: itemValue })
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
          </Picker>
          <View style={{ paddingTop: 20 }}>
            <Button title="Submit" raised={true} onPress={() => this.startTimer()}></Button>
            <Button title="Go to Timer Screen" raised={true} onPress={() => this.props.navigation.push('Timing')}></Button>
          </View> */}