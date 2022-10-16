import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';

import Home from './pages/Home';
import FirstTimeView from './pages/FirstTimeView';
import OwnerLoginPage from './pages/OwnerLoginPage';
import CreateAccount from './pages/CreateAccount';
import Maps from './pages/Maps';
import storage from './storage/Storage';

const Stack = createNativeStackNavigator();

const App = () => {
  let isFirstTime;
  let initialRoute = 'FirstTimeView';
  storage
    .load({
      key: 'isFirstTime',
    })
    .then(val => (isFirstTime = val))
    .catch(err => {
      console.warn(err.message);
    });
  if (isFirstTime === 'false') {
    initialRoute = 'Home';
  }

  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="FirstTimeView"
              component={Maps}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="OwnerLogin"
              component={OwnerLoginPage}
              options={{ title: 'Sign In' }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ title: 'Sign Up' }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};

export default App;