import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
      };
    }
    signIn = async(email,password)
    .then(() => {
        this.props.navigaton.replace('Dashboard');
    })
    .catch(error=> {
        Alert.alert(error.message)
    })
}