/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {Fonts} from './font';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.userInfo}>
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={require('./assets/pics/school_icon.png')}
          />
          <Text style={styles.userText}>
            {' '}
            나무고등학교 2학년 7반 5번 김성현
          </Text>
        </View>
        <View style={styles.boards}>
          <Image
            style={styles.banner}
            source={require('./assets/pics/banner.png')}
          />
          <Image
            style={styles.boardMenu}
            source={require('./assets/pics/hot_topic.png')}
          />
          <Image
            style={styles.boardMenu}
            source={require('./assets/pics/notice.png')}
          />
          <Image
            style={styles.boardMenu}
            source={require('./assets/pics/now_school.png')}
          />
          <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Board');
          }}>
          <Image
            style={styles.bookmarkMenu}
            source={require('./assets/pics/bookmark_board.png')}
          />
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  banner: {
    height: 73,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  boardMenu: {
    height: 110,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bookmarkMenu:{
      height: 157,
      resizeMode: 'contain',
    marginBottom: 10,
  },
  userInfo: {
    width: '90%',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.Lotte,
  },
});

export default HomeScreen;
