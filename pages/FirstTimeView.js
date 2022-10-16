import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import storage from '../storage/Storage';
import styles from '../styles/Styles';

const FirstTimeView = ({ navigation }) => {
  function changeFirstTimeState() {
    storage.save({
      key: 'isFirstTime',
      data: 'false',
      expires: null,
    });
  }

  function clickedOwner() {
    changeFirstTimeState;
    navigation.navigate('OwnerLogin');
  }

  function clickedCustomer() {
    changeFirstTimeState;
    // navigation.navigate('DefaultPage');
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.topViewStyles}>
          <Text style={styles.welcomeStyles}>
            Welcome to {'\n'} Food Trucks ATX!
          </Text>
          <Text style={styles.textStyles}>Are you an owner or a customer?</Text>
        </View>
        <TouchableOpacity
          style={styles.welcomeButtonStyles}
          onPress={clickedOwner}>
          <Text style={styles.welcomeButtonTextStyles}>Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.welcomeButtonStyles}>
          <Text
            style={styles.welcomeButtonTextStyles}
            onPress={clickedCustomer}>
            Customer
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default FirstTimeView;