import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class coba2 extends Component {
  componentDidMount() {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Selamat Datang di React Native!
        </Text>
        <Text style={styles.instructions}>
          Warna backgroundnya jadi hitam kan?
        </Text>
        <Text style={styles.instructions}>
          Gimana? Keren gak tuh? :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('coba2', () => codePush(coba2));
