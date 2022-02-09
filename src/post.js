/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import {Fonts} from './Font';

class PostScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerItemLeft}>나무로</Text>
          <Text style={styles.headerItemRight}>Highing</Text>
        </View>
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
            style={styles.postItem}
            source={require('./assets/pics/hot_topic.png')}
          />
          <View style={styles.iconContainer}>
            <View style={styles.iconItem}>
              <Image
                style={styles.icon}
                source={require('./assets/pics/star_icon.png')}
              />
              <Text style={styles.iconText}>스크랩</Text>
            </View>
            <View style={styles.iconItem}>
              <Image
                style={styles.icon}
                source={require('./assets/pics/like.png')}
              />
              <Text style={styles.iconText}>좋아요</Text>
            </View>
          </View>

          <View style={styles.boards}>
            <View style={styles.bgCommentsContainer}>
              <View style={styles.bgComments}>
                <Text
                  style={{
                    width: 55,
                    backgroundColor: '#323232',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: -15,
                    color: 'white',
                    alignItems: 'center',
                    paddingLeft: 14,
                  }}>
                  댓글
                </Text>
                <Text style={{flex: 1}}></Text>
                <Text style={{flex: 1}}></Text>
              </View>
              <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>익명</Text>
                <Text style={styles.commentContent}>매3비</Text>
                <View style={styles.commentIconItem}>
                  <Image
                    style={styles.commentIcon}
                    source={require('./assets/pics/like.png')}
                  />
                  <Text style={styles.commentIconText}>32</Text>
                </View>
              </View>
              <View
                style={{
                  width: 350,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.3,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              />
              <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>익명</Text>
                <Text style={styles.commentContent}>씨리얼</Text>
                <View style={styles.commentIconItem}>
                  <Image
                    style={styles.commentIcon}
                    source={require('./assets/pics/like.png')}
                  />
                  <Text style={styles.commentIconText}>20</Text>
                </View>
              </View>
              <View
                style={{
                  width: 350,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.3,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              />
              <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>익명</Text>
                <Text style={styles.commentContent}>걍 수능 기출 ㄱ</Text>
                <View style={styles.commentIconItem}>
                  <Image
                    style={styles.commentIcon}
                    source={require('./assets/pics/like.png')}
                  />
                  <Text style={styles.commentIconText}>2</Text>
                </View>
              </View>
              <View
                style={{
                  width: 350,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.3,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              />
              <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>익명</Text>
                <Text style={styles.commentContent}>마더텅도 좋아</Text>
                <View style={styles.commentIconItem}>
                  <Image
                    style={styles.commentIcon}
                    source={require('./assets/pics/like.png')}
                  />
                  <Text style={styles.commentIconText}>5</Text>
                </View>
              </View>


            </View>
            <View style={styles.addCommentContainer}>
                <Text>익명</Text>
              <TextInput style={styles.addCommentContent} placeholder="댓글을 입력하세요"></TextInput>
              <TouchableOpacity style={styles.btnAddComment}
            onPress={() => {
              this.props.navigation.navigate('Post');
            }}>
                <Text>등록하기</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
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
  postItem: {
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
  bgCommentsContainer: {
    marginLeft: -1,
    width: 359,
    height: 230,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
    marginTop: 10,
  },
  commentContainer: {
    width: 350,
    height:25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  commentUser: {fontWeight: 'bold'},
  commentContent: {
    marginLeft: 20,
    color: '#363636',
    flex: 0.9,
  },

  bgComments: {
    marginTop: -70,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerItemLeft: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    // fontFamily={Fonts.LOTTEMART}
  },
  headerItemRight: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    // fontFamily={Fonts.LOTTEMART}
  },
  iconContainer: {
    width: 359,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    left: 250,
    justifyContent: 'flex-end',
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 10,
    marginLeft: 5,
    backgroundColor: 'white',
  },
  iconText: {
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  commentIconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 10,
    marginLeft: 5,
    backgroundColor: 'white',
  },
  commentIconText: {
    color: 'black',
  },
  commentIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  addCommentContainer: {
    marginLeft: -1,
    width: 359,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection:'row',
    alignItems:'center',
  },
  addCommentContent: {
    width:250,
    borderLeftWidth:1,
    borderRightWidth:1,
    marginLeft:10,
    marginRight:10,
    paddingLeft:10,
    paddingRight:10,
  },
  btnAddComment:{
  }
});

export default PostScreen;
