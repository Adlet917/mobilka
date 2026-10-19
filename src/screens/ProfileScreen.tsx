import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProfileScreen() {
  const userName = "Ербол Әділет"; 

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.email}>student@university.kz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#092B55' },
  email: { fontSize: 16, color: '#60758A', marginTop: 4 },
});