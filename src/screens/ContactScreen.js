import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const contacts = [
  { label: 'Email', value: 'bohdan@example.com', link: 'mailto:bohdan@example.com' },
  { label: 'GitHub', value: 'github.com/Sezu-Dumoju', link: 'https://github.com/Sezu-Dumoju' },
  { label: 'Lokalizacja', value: 'Katowice, Polska', link: null },
];

export default function ContactScreen() {
  return (
    <View style={s.container}>
      <View style={s.card}>
        <Text style={s.heading}>Kontakt</Text>
        {contacts.map(c => (
          <TouchableOpacity key={c.label} style={s.row} onPress={() => c.link && Linking.openURL(c.link)} disabled={!c.link}>
            <Text style={s.label}>{c.label}</Text>
            <Text style={[s.value, c.link && s.link]}>{c.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1117', padding: 16 },
  card: { backgroundColor: '#161B22', borderRadius: 12, padding: 20 },
  heading: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#333' },
  label: { color: '#aaa', fontSize: 14 },
  value: { color: '#fff', fontSize: 14 },
  link: { color: '#1A73E8' },
});