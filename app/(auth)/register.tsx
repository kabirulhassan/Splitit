import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleRegister = async (): Promise<void> => {
        try {
            Alert.alert('Success', 'Account created! You can now log in.');
            router.push('/login');
        } catch (error: any) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View>
            <Text>Register</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Back to Login" onPress={() => router.push('/login')} />
        </View>
    );
}