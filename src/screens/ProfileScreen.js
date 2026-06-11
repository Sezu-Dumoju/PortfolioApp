import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const skills = ['Python', 'React Native', 'PHP / Yii2', 'Kotlin', 'YOLO / PyTorch', 'MySQL', 'Git', 'Cisco / OSPF'];

export default function ProfileScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <View style={s.avatar}><Text style={s.avatarText}>B</Text></View>
        <Text style={s.name}>Bohdan</Text>
        <Text style={s.role}>Student Informatyki — Akademia Śląska</Text>
        <Text style={s.spec}>Specjalizacja: AMPI</Text>
      </View>
      <View style={s.section}>
        <Text style={s.sectionTitle}>O mnie</Text>
        <Text style={s.bio}>Student informatyki z pasją do computer vision, sieci komputerowych i aplikacji mobilnych. Pracuję nad systemem automatycznego wykrywania uszkodzeń dróg jako projekt dyplomowy.</Text>
      </View>
      <View style={s.section}>
        <Text style={s.sectionTitle}>Umiejętności</Text>
        <View style={s.grid}>
          {skills.map(skill => (
            <View key={skill} style={s.chip}><Text style={s.chipText}>{skill}</Text></View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1117' },
  header: { alignItems: 'center', padding: 30, backgroundColor: '#161B22' },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#1A73E8', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarText: { fontSize: 36, color: '#fff', fontWeight: 'bold' },
  name: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  role: { color: '#aaa', marginTop: 4 },
  spec: { color: '#1A73E8', marginTop: 2, fontSize: 13 },
  section: { margin: 16, backgroundColor: '#161B22', borderRadius: 12, padding: 16 },
  sectionTitle: { color: '#1A73E8', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  bio: { color: '#ccc', lineHeight: 22 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#1A73E820', borderColor: '#1A73E8', borderWidth: 1, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5 },
  chipText: { color: '#1A73E8', fontSize: 13 },
});