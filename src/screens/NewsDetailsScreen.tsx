import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Announcement } from '../types/announcement';
import { getAnnouncementById } from '../api/announcements';
import { useSettings } from '../context/SettingsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'NewsDetails'>;

export function NewsDetailsScreen({ route, navigation }: Props) {
  const { announcementId } = route.params;
  const { colors, fontSize } = useSettings();
  
  const [item, setItem] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnnouncementById(announcementId)
      .then((data) => setItem(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [announcementId]);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color="#0B66E4" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, fontSize: fontSize + 4 }]}>
        {item?.title}
      </Text>
      <Text style={[styles.body, { color: colors.text, fontSize }]}>
        {item?.body}
      </Text>
      <Button title="Артқа қайту" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontWeight: 'bold', marginBottom: 16 },
  body: { lineHeight: 22, marginBottom: 24, color: '#64748B' },
});