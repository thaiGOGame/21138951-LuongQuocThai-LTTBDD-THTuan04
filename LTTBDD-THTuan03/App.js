import {Status} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import firstscreen from './assets/screens/firstscreen';
import secondscreen from './assets/screens/secondscreen';
import thirdscreen from './assets/screens/thirdscreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First Screen">
        <Stack.Screen name="First Screen" component={firstscreen} />
        <Stack.Screen name="Second Screen" component={secondscreen} />
        <Stack.Screen name="Third Screen" component={thirdscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
