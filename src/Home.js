import {StyleSheet, Text, View, SafeAreaView, ImageBackground, Button, TouchableOpacity} from 'react-native';

import Signup from './Signup';
import Login from './Login';

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../assets/Solidere.jpg")} style={styles.image}>
        <View style={styles.innerView}>
          <Text style={styles.text}>Xplore LB</Text>
          <View style={styles.line} />
          <Text>{"\n"}</Text>
          <Text style={styles.questions}>Don't have an account?</Text>
          <TouchableOpacity style={styles.button1}>
            <Button title="Sign up" color="#FFFFFF" onPress={() => navigation.navigate(Signup)} />
          </TouchableOpacity>
          <View style={styles.line2} />
          <Text style={styles.questions}>Already have an account?</Text>
          <TouchableOpacity style={styles.button2}>
            <Button title="Login" color="#FFFFFF" onPress={() => navigation.navigate(Login)} />
          </TouchableOpacity>
        </View>
      </ImageBackground>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },

  innerView: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    justifyContent: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 55,
  },

  line: {
    marginTop: 10,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: '60%',
    marginLeft: '20%',
  },

  button1: {
    backgroundColor: "#EE161F",
    width: '50%',
    marginLeft: '25%',
    borderRadius: 25,
    overflow: 'hidden',
  },

  button2: {
    backgroundColor: "#00A850",
    width: '50%',  
    marginLeft: '25%',
    borderRadius: 25,
    overflow: 'hidden',
  },

  questions: {
    color: '#FFFFFF',
    textAlign: "center",
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textDecorationColor: '#FFFFFF',
    fontSize: 17,
  },
  
  line2: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: '50%',
    marginLeft: '25%',
    marginTop: '7.5%',
    marginBottom: '7.5%',
  },
});

export default Home;
