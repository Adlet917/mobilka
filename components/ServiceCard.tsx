import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Service } from '../src/types/Service';

type CardProps = {
  service: Service;
  width: number;
};

export function ServiceCard({ service, width }: CardProps) {
  return (
    <View style={[styles.card, { width, backgroundColor: service.color }]}>
      <Text style={styles.icon}>{service.icon}</Text>
      <View>
        <Text style={styles.cardTitle}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 160,
    padding: 16,
    borderRadius: 18,
    justifyContent: 'space-between',
    shadowColor: '#092B55',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: { fontSize: 28 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#092B55', marginBottom: 4 },
  description: { fontSize: 13, lineHeight: 18, color: '#52677D' },
});