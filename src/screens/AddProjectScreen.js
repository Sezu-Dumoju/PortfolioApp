import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { loadProjects, saveProjects } from '../utils/storage';

export default function AddProjectScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = 'Nazwa projektu jest wymagana';
    if (!tech.trim()) e.tech = 'Technologie są wymagane';
    if (description.trim().length < 20) e.description = 'Opis musi mieć co najmniej 20 znaków';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    const projects = await loadProjects();
    const newProject = { id: Date.now().toString(), title: title.trim(), tech: tech.trim(), description: description.trim(), github: github.trim() };
    await saveProjects([...projects, newProject]);
    Alert.alert('Sukces', 'Projekt został dodany!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <ScrollView style={s.container}>
      <View style={s.form}>
        <Text style={s.label}>Nazwa projektu *</Text>
        <TextInput style={[s.input, errors.title && s.inputError]} value={title} onChangeText={setTitle} placeholder="np. Road Damage Detection" placeholderTextColor="#555" />
        {errors.title && <Text style={s.error}>{errors.title}</Text>}

        <Text style={s.label}>Technologie *</Text>
        <TextInput style={[s.input, errors.tech && s.inputError]} value={tech} onChangeText={setTech} placeholder="np. Python, YOLO" placeholderTextColor="#555" />
        {errors.tech && <Text style={s.error}>{errors.tech}</Text>}

        <Text style={s.label}>Opis * (min. 20 znaków)</Text>
        <TextInput style={[s.input, s.textarea, errors.description && s.inputError]} value={description} onChangeText={setDescription} placeholder="Opisz projekt..." placeholderTextColor="#555" multiline numberOfLines={4} />
        {errors.description && <Text style={s.error}>{errors.description}</Text>}

        <Text style={s.label}>Link GitHub (opcjonalnie)</Text>
        <TextInput style={s.input} value={github} onChangeText={setGithub} placeholder="https://github.com/..." placeholderTextColor="#555" autoCapitalize="none" />

        <TouchableOpacity style={s.btn} onPress={handleSave}>
          <Text style={s.btnText}>Zapisz projekt</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1117' },
  form: { margin: 16 },
  label: { color: '#aaa', marginBottom: 6, marginTop: 14 },
  input: { backgroundColor: '#161B22', color: '#fff', borderRadius: 8, padding: 12, borderWidth: 1, borderColor: '#333' },
  inputError: { borderColor: '#E84040' },
  textarea: { height: 100, textAlignVertical: 'top' },
  error: { color: '#E84040', fontSize: 12, marginTop: 4 },
  btn: { backgroundColor: '#1A73E8', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});