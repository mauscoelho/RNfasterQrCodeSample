import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";
import QrCode from "react-native-qrcode-svg";
import { Button } from "react-native-elements";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.qrCodeContainer}>
        <View style={styles.qrCode}>
          <QrCode
            style={styles.qrCode}
            value="http://awesome.link.qr"
            logo={logo}
            logoSize={50}
            size={220}
            logoBackgroundColor="transparent"
          />
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={"Manage Users"} borderRadius={10} backgroundColor={"#009688"} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F2F1"
  },
  qrCode: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#009688"
  },
  qrCodeContainer:{
    flex: 2,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
