import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from './src/screens/ProfileScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ProjectDetailScreen from './src/screens/ProjectDetailScreen';
import AddProjectScreen from './src/screens/AddProjectScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const C = { primary: '#1A73E8', bg: '#0F1117' };

function ProjectsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: C.bg }, headerTintColor: '#fff' }}>
      <Stack.Screen name="ProjectsList" component={ProjectsScreen} options={{ title: 'Projekty' }} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} options={{ title: 'Szczegóły' }} />
      <Stack.Screen name="AddProject" component={AddProjectScreen} options={{ title: 'Nowy projekt' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: C.bg, borderTopColor: '#333' },
          tabBarActiveTintColor: C.primary,
          tabBarInactiveTintColor: '#888',
          headerStyle: { backgroundColor: C.bg },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Profile: 'person-outline',
              Projects: 'folder-outline',
              Contact: 'mail-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
        <Tab.Screen name="Projects" component={ProjectsStack} options={{ headerShown: false, title: 'Projekty' }} />
        <Tab.Screen name="Contact" component={ContactScreen} options={{ title: 'Kontakt' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}