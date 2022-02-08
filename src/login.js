/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class LoginScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Highing</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder={'ID'} style={styles.textID}/>
          <TextInput placeholder={'PW'} style={styles.textPW} secureTextEntry={true}/>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Login"
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}
            color="white"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#97744D',
        width:'80%',
        marginBottom: 15,
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        padding:50,
        color:'white',
    },
    textID:{
        width:'100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:15,
        paddingLeft:10,
    },
    textPW:{
      width:'100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:15,
        paddingLeft:10,

    },
    formContainer:{
        borderColor:'red',
        width: '80%',
    },
    btnContainer:{
      backgroundColor:'#97744D',
      width:'80%',
    }

});

export default LoginScreen;
