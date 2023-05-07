import {StyleSheet, Text, View, SafeAreaView, ImageBackground, Button, TouchableOpacity, TextInput} from 'react-native';

import Main from './Main';

function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../assets/Raouche.jpg")} style={styles.image}>
        <View style={styles.innerView}>
          <Text style={styles.text2}>Welcome Back</Text>
          <View style={styles.line} />
          <Text>{"\n"}</Text>
          <Text style={styles.header}>Email:</Text>
          <TextInput style={styles.input} inputMode="email" placeholder="user@domain.extension" cursorColor="black" keyboardType="email-address" placeholderTextColor="grey" />
          <Text style={styles.header}>Password:</Text>
          <TextInput style={styles.input2} inputMode="text" secureTextEntry="true" placeholder="Min. 8 characters" cursorColor="black" keyboardType="default" placeholderTextColor="grey" />
          <Text>{"\n"}</Text>
          <View style={styles.line} />
          <Text>{"\n"}</Text>
          <TouchableOpacity style={styles.button4}>
            <Button title="Sign In" color="#FFFFFF" onPress={() => {navigation.navigate(Main); alert("Great to have you back again!")}} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
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

  line: {
    marginTop: 10,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: '60%',
    marginLeft: '20%',
  },

  button4: {
    backgroundColor: "#00A850",
    width: '40%',  
    marginLeft: '30%',
    overflow: 'hidden',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderColor: "gray",
    width: "60%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 34,
    marginLeft: 80,
    marginBottom: 20,
    color: "black",
  },

  input2: {
    backgroundColor: '#FFFFFF',
    borderColor: "gray",
    width: "60%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 34,
    marginLeft: 80,
    color: "black",
  },

  header: {
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 80,
  },
  
  text2: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 50,
  }
});

export default Login;
