import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Products'
                component={Products}
                options={{
                    headerStyle:{
                        backgroundColor: '#f5f5f5',
                        borderBottomWidth: 1,
                        borderBottomColor: '#4169E1'
                    },
                    headerTintColor: '#3B82F6',
                    headerBackTitleVisible: false,
                    headerTitle: 'Back'
                }}
            />

            <Stack.Screen
                name='About'
                component={About}
                options={{
                    headerShown: false
                }}
            />



        </Stack.Navigator>
    )
}

export default Routes;