import React from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useSettings } from '../context/SettingsContext';

export function SettingsScreen() {
  const { theme, colors, fontSize, setTheme, setFontScale, resetSettings } = useSettings();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, fontSize: fontSize + 6 }]}>Баптаулар (Settings)</Text>

      <View style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={{ color: colors.text, fontSize }}>Қараңғы тақырып (Dark Mode)</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={(enabled) => setTheme(enabled ? 'dark' : 'light')}
        />
      </View>

      <View style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={{ color: colors.text, fontSize }}>Қаріп өлшемі</Text>
        <View style={styles.buttonGroup}>
          <Button title="A-" onPress={() => setFontScale('small')} />
          <Button title="A" onPress={() => setFontScale('normal')} />
          <Button title="A+" onPress={() => setFontScale('large')} />
        </View>
      </View>

      <Button title="Баптауларды қалпына келтіру" color="#D9342B" onPress={resetSettings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  buttonGroup: { flexDirection: 'row', gap: 8 },
});