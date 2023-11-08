import { StyleSheet, Text, View } from 'react-native';
import DefautlProps from './src/components/DefaultProps';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LoginForm />
      <Saludar name="danniel navas" />
      <Saludar name="leslye navarro" />
      <DefautlProps />
      <DefautlProps firstname="Leslye" lastname="Navarro" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
