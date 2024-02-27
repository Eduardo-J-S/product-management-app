import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from './src/contexts';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Routes />
      </ContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}