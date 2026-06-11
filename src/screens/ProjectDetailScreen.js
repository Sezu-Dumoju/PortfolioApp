import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function ProjectDetailScreen({ route }) {
  const { project } = route.params;
  return (
    <ScrollView style={s.container}>
      <View style={s.card}>
        <Text style={s.title}>{project.title}</Text>
        <Text style={s.label}>Technologie:</Text>
        <Text style={s.tech}>{project.tech}</Text>
        <Text style={s.label}>Opis:</Text>
        <Text style={s.desc}>{project.description}</Text>
        {project.github ? (
          <TouchableOpacity style={s.btn} onPress={() => Linking.openURL(project.github)}>
            <Text style={s.btnText}>🔗 Otwórz GitHub</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1117' },
  card: { margin: 16, backgroundColor: '#161B22', borderRadius: 12, padding: 20 },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  label: { color: '#1A73E8', fontWeight: 'bold', marginTop: 12, marginBottom: 4 },
  tech: { color: '#aaa' },
  desc: { color: '#ccc', lineHeight: 22 },
  btn: { backgroundColor: '#1A73E8', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  btnText: { color: '#fff', fontWeight: 'bold' },
});