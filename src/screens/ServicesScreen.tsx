import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Кампус сервистері</Text>
      <Text style={styles.subtitle}>Бір жерде қажеттінің бәрі</Text>
      
      {/* Мына жерге сервистер карточкаларын қосуға болады */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Кітапхана</Text>
        <Text style={styles.cardDesc}>Оқу залдары мен кітаптарды қарау</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Кесте (Schedule)</Text>
        <Text style={styles.cardDesc}>Сабақтар мен емтихан күндері</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, backgroundColor: '#F4F8FC', flexGrow: 1 },
  title: { fontSize: 26, fontWeight: '800', color: '#092B55' },
  subtitle: { fontSize: 16, color: '#60758A', marginBottom: 20 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 16, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#092B55', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#60758A' },
});