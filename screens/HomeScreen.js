import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';

export function HomeScreen({ route, navigation }) {
  //deklaracija state varjable
  const [comment, setComment] = useState([]);

  //uzima vrijednost koju smo unijeli u textInput i dodaje istu u niz, dodjeljuje id (generirani) i value (vrijednost koju upišemo u textInput)
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  //uzima id vrijednosti na koju smo kliknuli i briše tu vrijednost iz niza
  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };
  function handleHomePress() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Text style={styles.profileText}>Sign in</Text>
        <Text style={styles.label}>Stay updated on your professional world</Text>
      </View>

      <View style={styles.dateWrapper}>
        <View style={styles.emailWrapper}>
        <Text style={styles.input}>Email or Phone</Text>
        </View>
      </View>

      <View style={styles.dateWrapper}>
        <View style={styles.emailWrapper}>
        <Text style={styles.input}>Password</Text>
        <Text style={styles.show}>show</Text>
        </View>
         <Text style={styles.forgot}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.gameCommentsJumbotron}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.or}>or</Text>
      <TouchableOpacity style={styles.gameCommentsJumbotro}>
       <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
          }}
          style={{ height: 24, width: 20, marginLeft: 40, marginRight: 10 }}
        />
        <Text style={styles.buttonApple}>Sign in with Apple</Text>
      </TouchableOpacity>

      <View style={styles.zadnje}>
       <Text style={styles.novo}>New to LinkedIn?</Text>
       <Text style={styles.join}>Join now</Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  gameCommentsJumbotron: {
    marginTop: 30,
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#3568BC"
  },
  buttonText:{
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: 500
  },
  profileWrapper: {
    justifyContent: 'space-around',
    alignItems: 'left',
    marginLeft: 20
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: "left",
  },
  dateWrapper: {
    paddingTop: 25,
    paddingLeft: 20,
  },
show: {
    fontWeight: 'bold',
    color: "#3568BC",
    paddingRight: 10
  },
input: {
  padding: 10,
  color: "#939393",
  },
or: {
  padding: 10,
  color: "#939393",
  textAlign: "center"
  },
label: {
  paddingRight: 10,
  paddingTop: 10,
  },
forgot: {
  paddingRight: 10,
  paddingTop: 10,
  fontWeight: 'bold',
  color: "#3568BC",
  fontSize: 16
  },
join: {
  paddingLeft: 6,
  paddingTop: 20,
  fontWeight: 'bold',
  color: "#3568BC",
  fontSize: 16,
  textAlign: "center",
  },
novo: {
  paddingLeft: 60,
  paddingTop: 20,
  fontSize: 16,
  textAlign: "center",
  },
emailWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    padding: 5,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#939393"
  },
 buttonApple:{
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
    fontWeight: 500,
  },
gameCommentsJumbotro: {
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#939393",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
zadnje:{
    flexDirection: "row",
    alignItems: "center"
  },
});