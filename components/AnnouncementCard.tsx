import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Announcement } from '../src/types/announcement'; // Если types в корне, то './types/announcement'
import { useSettings } from '../src/context/SettingsContext'; // Так как context лежит внутри src

type Props = {
  item: Announcement;
  onPress: (item: Announcement) => void;
};

export function AnnouncementCard({ item, onPress }: Props) {
  const { colors, fontSize } = useSettings();

  return (
    <Pressable
      onPress={() => onPress(item)}
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
    >
      <Text style={[styles.title, { color: colors.text, fontSize: fontSize + 2 }]} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={[styles.body, { fontSize: fontSize - 2 }]} numberOfLines={2}>
        {item.body}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  title: { fontWeight: '600', marginBottom: 6 },
  body: { color: '#64748B' },
});