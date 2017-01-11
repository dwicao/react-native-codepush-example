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
          Ini adalah contoh RN + CodePush
        </Text>
        <Text style={styles.instructions}>
          Ini nanti akan saya ubah warna backgroundnya jadi hitam
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('coba2', () => codePush(coba2));
