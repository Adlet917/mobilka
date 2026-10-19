import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { LoginScreen } from '../screens/LoginScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { MainTabs } from './MainTabs';
import { useSettings } from '../context/SettingsContext';
import { NewsDetailsScreen } from '../screens/NewsDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { colors } = useSettings();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ title: 'Толық мәлімет' }} />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={({ route }) => ({ title: route.params?.title ?? 'Details' })} 
      />
    </Stack.Navigator>
  );
}