/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {Fonts} from './font';

class BoardScreen extends Component {
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
        <View>
          <Image
            style={styles.bookmarkMenu}
            source={require('./assets/pics/bookmark_board.png')}
          />
          <View style={styles.boards}>
            <View style={styles.bgBookmark}>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>진로 게시판</Text>
                <Text style={styles.boardContents}>다들 꿈이 뭐야?</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>음악 게시판</Text>
                <Text style={styles.boardContents}>
                  이 곡 진짜 추천! 함 들어봐봐
                </Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>3학년 게시판</Text>
                <Text style={styles.boardContents}>다들 화이팅!</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>수능 게시판</Text>
                <Text style={styles.boardContents}>하... 불수능</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>모의고사 게시판</Text>
                <Text style={styles.boardContents}>이번 등급컷 떴다!</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>급식 게시판</Text>
                <Text style={styles.boardContents}>오늘 급식 아는 사람?</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>문제집추천 게시판</Text>
                <Text style={styles.boardContents}>
                  수학 3등급인데 뭐 푸는 게 좋아?
                </Text>
              </View>
            </View>

            <View style={styles.bg}>

              <View style={styles.bgAllBoard}>
                <Text style={{
                  backgroundColor:'#915095',
                  paddingLeft: 10,
                  paddingRight:10,
                  marginTop:-11,
                  color:'white',

                  }}>모든 게시판</Text>
                <Text style={{flex:1}}></Text>
                <Text style={{flex:1}}></Text>

              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>1학년 게시판</Text>
                <Text style={styles.boardContents}>오늘 고등학교 배정받았어요!</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>독서 게시판</Text>
                <Text style={styles.boardContents}>다들 추리소설 좋아해?</Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>취업 게시판</Text>
                <Text style={styles.boardContents}>
                  이번 S기업 고졸 전형 지원한 사람?
                </Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>기숙사 게시판</Text>
                <Text style={styles.boardContents}>
                  이 근처 맛집 어디야?
                </Text>
              </View>
              <View style={styles.boardItem}>
                <Text style={styles.boardTitle}>2학년 게시판</Text>
                <Text style={styles.boardContents}>
                  와 이번에도 수학여행 취소..
                </Text>
              </View>
            </View>
          </View>
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
  bookmarkMenu: {
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
    // fontFamily: Fonts.LOTTEMART,
  },
  boards: {
    alignItems: 'center',
  },
  bgBookmark: {
    marginLeft: -1,
    width: 359,
    height: 250,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    marginTop: -24,
    paddingTop: 10,
  },
  bg: {
    marginLeft: -1,
    width: 359,
    height: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    paddingTop: 10,
  },
  boardItem: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  boardTitle: {
    fontSize: 20,
  },
  boardContents: {
    marginLeft: 20,
    color: '#363636',
  },
  bgAllBoard:{
    marginTop: -10,
    flexDirection:'row',
    flex:1,
    alignItems:'center',
  }
});

export default BoardScreen;
