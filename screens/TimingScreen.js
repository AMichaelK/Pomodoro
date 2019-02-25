import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { Text, Button } from 'react-native-elements';

export default class TimingScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
      pause: false,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('MyModal')}
          title='Back'
          tintColor='white'
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      minutes: navigation.getParam('minutes'),
      seconds: navigation.getParam('seconds'),
    },
      () => {
        this.startTimer()
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerFunction);
  }

  startTimer() {
    let timedSeconds = this.state.seconds;
    let timedMinutes = this.state.minutes;
    this.timerFunction = setInterval(() => {
      if (timedMinutes === 0 && timedSeconds === 0) {
        clearInterval(this.timerFunction);
      }
      else {
        if (timedSeconds === 0) {
          timedMinutes -= 1;
          timedSeconds = 59;
          this.setState({ minutes: timedMinutes, seconds: timedSeconds });
        } else {
          timedSeconds -= 1;
          this.setState({ minutes: timedMinutes, seconds: timedSeconds });
        }
      }
    }, 1000);
  }

  pauseOrResume() {
    if (!this.state.pause) {
      clearInterval(this.timerFunction);
      this.setState({ pause: true });
    } else {
      this.startTimer();
      this.setState({ pause: false });
    }

  }

  render() {
    return (
      <View style={{ paddingTop: 15, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}>Time left:</Text>
        <Text style={styles.bodyText}>{this.state.minutes} minutes</Text>
        <Text style={styles.bodyText}>{this.state.seconds} seconds</Text>
        <Button title={this.state.pause ? 'Resume' : 'Pause'} raised={true} onPress={
          () => this.pauseOrResume()
        }>
        </Button>
      </View>
    )
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
    fontSize: 24,
  }
});