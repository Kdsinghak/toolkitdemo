import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddDetails from '../modules/Add_details';

const Stack = createNativeStackNavigator();
export default function Rootnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddDetails" component={AddDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
