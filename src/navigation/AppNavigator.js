import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ItemDetails"
        component={ItemDetailsScreen}
        options={{ title: 'Item Details' }}
      />
    </Stack.Navigator>
  );
}