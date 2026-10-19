import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from '../types/navigation'; // жолыңызға қарай түзетіңіз

type Props = BottomTabScreenProps<MainTabParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Басты бет</Text>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Services')} // Немесе Stack экрандарына өту
      >
        <Text style={styles.buttonText}>Сервистерге өту</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  button: { backgroundColor: '#1E4A80', padding: 12, borderRadius: 8 },
  buttonText: { color: '#FFF', fontWeight: '600' },
});