import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsProvider } from './src/context/SettingsContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SettingsProvider>
  );
}