import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  Button, 
  StyleSheet 
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; // Укажи правильный путь к типам
import { Announcement } from '../types/announcement';
import { getAnnouncements } from '../api/announcements';
import { AnnouncementCard } from '../../components/AnnouncementCard';
import { useSettings } from '../context/SettingsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export function NewsScreen({ navigation }: Props) {
  const { colors, fontSize } = useSettings();
  const [items, setItems] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setError(null);
      const data = await getAnnouncements();
      setItems(data);
    } catch (e) {
      setError('Деректерді жүктеу мүмкін болмады. Интернетті тексеріңіз.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color="#0B66E4" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text, fontSize }]}>{error}</Text>
        <Button title="Қайталау" onPress={loadData} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text, fontSize: fontSize + 4 }]}>
        Жаңалықтар (News)
      </Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AnnouncementCard
            item={item}
            onPress={(selected) =>
              navigation.navigate('NewsDetails', { announcementId: selected.id })
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  headerTitle: { fontWeight: 'bold', marginBottom: 12 },
  errorText: { textAlign: 'center', marginBottom: 16 },
});