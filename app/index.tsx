import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen(): JSX.Element {
  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    router.replace('/login');
  };

  return (
    <View>
      <Text>Welcome to Splitit!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}