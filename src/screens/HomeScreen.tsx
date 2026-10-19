import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSettings } from '../context/SettingsContext';

export function HomeScreen() {
  const { colors, fontSize } = useSettings();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, fontSize: fontSize + 6 }]}>
        Басты бет (Home)
      </Text>
      <Text style={[styles.subtitle, { color: colors.text, fontSize }]}>
        Қош келдіңіз! Campus Hub жұмыс істеп тұр.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#64748B' },
});