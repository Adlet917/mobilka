import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types/navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { ServicesScreen } from '../screens/ServicesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NewsScreen } from '../screens/NewsScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Басты бет' }} />
      <Tab.Screen name="Services" component={ServicesScreen} options={{ title: 'Сервистер' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Баптаулар' }} />
      <Tab.Screen name="News" component={NewsScreen} options={{ title: 'Жаңалықтар' }} />
    </Tab.Navigator>
  );
}