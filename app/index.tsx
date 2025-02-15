import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { getToken } from '@/utils/authStore';
import { logout } from '@/utils/api';

export default function HomeScreen(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (!token) {
        router.replace('/login');
      }
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  return (
    <View>
      <Text>Welcome Vmro!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}