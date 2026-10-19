import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!login.trim() || password.length < 6) {
      Alert.alert('Қате', 'Логинді және кемінде 6 таңбалы құпиясөзді енгізіңіз');
      return;
    }
    // Main экранына өтіп, Login экранын тарихтан өшіреміз
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Hub</Text>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        autoCapitalize="none"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Құпиясөз"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Кіру</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F4F8FC' },
  title: { fontSize: 32, fontWeight: '800', color: '#092B55', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#C7D7E8', padding: 14, borderRadius: 12, marginBottom: 12, backgroundColor: '#FFF' },
  button: { backgroundColor: '#0B66E4', padding: 15, borderRadius: 12, marginTop: 8 },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: '700', fontSize: 16 },
});