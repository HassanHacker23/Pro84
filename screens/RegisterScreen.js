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
  Alert,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

export default class RegisterScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
      };
    }
registerUser=(email,user,confirmPassword,first_name,last_name) => {
    if(password==confirmPassword){
        firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then((userCredential)=>{
            Alert.alert("User registered!! ");
        })
        .catch(error=> {
            Alert.alert(error.message)
        })
    }else{
        Alert.alert('Password Dont Match!')
    }
}
}