import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Hub</Text>
      
      <Pressable 
        style={styles.loginButton} 
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.buttonText}>Кіру</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F4F8FC' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#092B55', marginBottom: 20 },
  loginButton: { backgroundColor: '#0B66E4', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
});