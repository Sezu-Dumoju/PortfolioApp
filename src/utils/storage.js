import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'portfolio_projects';

export const defaultProjects = [
  { id: '1', title: 'Road Damage Detection', tech: 'Python, YOLO, PyTorch, OpenCV', description: 'System automatycznego wykrywania uszkodzeń dróg na podstawie datasetu RDD2022.', github: 'https://github.com/Sezu-Dumoju' },
  { id: '2', title: 'LuzikStore.pl', tech: 'PHP, Yii2, MySQL', description: 'Sklep internetowy zbudowany na frameworku Yii2 z architekturą MVC.', github: 'https://github.com/Sezu-Dumoju' },
];

export const saveProjects = async (projects) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(projects));
};

export const loadProjects = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : defaultProjects;
};
