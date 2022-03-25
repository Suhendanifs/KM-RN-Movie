/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BASE_URL} from '../../helpers/APi';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        username: username,
        password: password,
      };

      const res = await axios.post(`${BASE_URL}/auth/login`, body);
      if (res.status === 200 || res.status === 201) {
        navigation.navigate('Home');
      }
      console.log(res);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  //username: "mor_2314",
  // password: "83r5^_"
  return (
    <View>
      <Input placeholder="Username" onChangeText={text => setUsername(text)} />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.btnLogin}>
          <TouchableOpacity onPress={postLogin}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  btnLogin: {
    width: 160,
    height: 80,
    backgroundColor: 'grey',
    marginHorizontal: 22,
    borderRadius: 10,
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
  },
});
