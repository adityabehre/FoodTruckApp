import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import styles from '../styles/Styles';

const OwnerAccountPage = ({ navigation }) => {
  const [truckName, setTruckName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameOkay, setUserNameOkay] = useState(true);
  const [passwordOkay, setPasswordOkay] = useState(true);

  const localStyles = StyleSheet.create({
    textInputStyles: {
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 25,
      borderRadius: 10,
      height: 50,
      // borderColor: okay ? 'black' : 'red',
    },
  });

  function signIn() {
    console.log('signin clicked');
    console.log(truckName);
    if (truckName.length === 0) {
    } else {
    }
    // do rest of actions
  }

  return (
    <>
      <View>
        <Text style={styles.headerStyles}>{'\n\n'}Sign in to your account</Text>
        <TextInput
          style={localStyles.textInputStyles}
          placeholder="Username"
          value={truckName}
          onChangeText={t => setTruckName(t)}
        />
        <TextInput
          style={localStyles.textInputStyles}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={t => setPassword(t)}
        />
        <TouchableOpacity style={styles.buttonStyles} onPress={() => signIn()}>
          <Text style={styles.buttonTextStyles}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.ownerLoginPageLine} />
        <Text style={styles.textStyles}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.buttonTextStyles}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default OwnerAccountPage;