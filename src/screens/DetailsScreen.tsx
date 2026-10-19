import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({ route, navigation }: Props) {
  const { serviceId, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.idText}>Сервис ID: {serviceId}</Text>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Артқа қайту</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F8FC', padding: 20 },
  title: { fontSize: 26, fontWeight: '800', color: '#092B55', marginBottom: 10 },
  idText: { fontSize: 16, color: '#60758A', marginBottom: 20 },
  backButton: { backgroundColor: '#0B66E4', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10 },
  backText: { color: '#FFF', fontWeight: '700' },
});