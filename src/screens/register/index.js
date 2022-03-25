/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {BASE_URL} from '../../helpers/APi';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          City: city,
          street: street,
          number: number,
          zipcode: zipcode,
          geolocation: {
            lat: lat,
            long: long,
          },
        },
        phone: phone,
      };
      const res = await axios.post(`${BASE_URL}/users`, body, {});
      console.log(res);
    } catch (error) {
      console.log(Error);
    }
  };

  return (
    <ScrollView>
      <Input
        placeholder="email"
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <Input
        placeholder="username"
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <Input
        placeholder="password"
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Input
        placeholder="firstname"
        onChangeText={text => {
          setFirstname(text);
        }}
      />
      <Input
        placeholder="lastname"
        onChangeText={text => {
          setLastname(text);
        }}
      />
      <Input
        placeholder="city"
        onChangeText={text => {
          setCity(text);
        }}
      />
      <Input
        placeholder="street"
        onChangeText={text => {
          setStreet(text);
        }}
      />
      <Input
        placeholder="number"
        keyboardType="numeric"
        onChangeText={text => {
          setNumber(text);
        }}
      />
      <Input
        placeholder="zipcode"
        onChangeText={text => {
          setZipCode(text);
        }}
      />
      <Input
        placeholder="lat"
        keyboardType="numeric"
        onChangeText={text => {
          setLat(text);
        }}
      />
      <Input
        placeholder="long"
        keyboardType="numeric"
        onChangeText={text => {
          setLong(text);
        }}
      />
      <Input
        placeholder="phone"
        keyboardType="phone-pad"
        onChangeText={text => {
          setPhone(text);
        }}
      />
      <View style={styles.btnLogin}>
        <TouchableOpacity onPress={postRegister}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  btnLogin: {
    width: 140,
    height: 50,
    backgroundColor: 'grey',
    marginHorizontal: 130,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 23,
    fontWeight: '600',
  },
});
