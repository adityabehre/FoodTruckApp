import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/Styles';

const CreateAccount = () => {
  const [truckName, setTruckName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let validUserName = true;

  function checkPassword() {
    if (password.length < 8) {
      Alert.alert('Your password must be longer than 8 characters.', [
        {
          text: 'OK',
        },
      ]);
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.', [
        {
          text: 'OK',
        },
      ]);
    }
  }
  if (truckName.split(' ').length > 1) {
    validUserName = false;
  } else {
    validUserName = true;
  }

  return (
    <>
      <View>
        <Text style={styles.headerStyles}>{'\n\n'}Create an account</Text>
        <TextInput
          style={styles.textInputStyles}
          placeholder="Username"
          value={truckName}
          onChangeText={t => setTruckName(t)}
        />
        {!validUserName && <Text>Your username cannot have spaces.</Text>}
        <TextInput
          style={styles.textInputStyles}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={t => setPassword(t)}
        />
        <TextInput
          style={styles.textInputStyles}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={t => setConfirmPassword(t)}
        />
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => checkPassword()}>
          <Text style={styles.buttonTextStyles}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default CreateAccount;