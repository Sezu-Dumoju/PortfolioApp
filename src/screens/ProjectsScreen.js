import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { loadProjects } from '../utils/storage';

export default function ProjectsScreen({ navigation }) {
  const [projects, setProjects] = useState([]);

  useFocusEffect(useCallback(() => {
    loadProjects().then(setProjects);
  }, []));

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.addBtn} onPress={() => navigation.navigate('AddProject')}>
        <Text style={s.addBtnText}>+ Dodaj projekt</Text>
      </TouchableOpacity>
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={s.card} onPress={() => navigation.navigate('ProjectDetail', { project: item })}>
            <Text style={s.title}>{item.title}</Text>
            <Text style={s.tech}>{item.tech}</Text>
            <Text style={s.desc} numberOfLines={2}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1117', padding: 12 },
  addBtn: { backgroundColor: '#1A73E8', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  card: { backgroundColor: '#161B22', borderRadius: 12, padding: 16, marginBottom: 10 },
  title: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  tech: { color: '#1A73E8', fontSize: 12, marginTop: 4 },
  desc: { color: '#aaa', marginTop: 6, fontSize: 13 },
});