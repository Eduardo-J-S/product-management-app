import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate('Products');
    }

    const handleGetAbout = () => {
        navigation.navigate('About');
    }

    return (
        <ScrollView className="flex-1 p-4 mt-14">
            <View className="mb-6">
                <Text className="text-2xl font-bold mb-2">Welcome to Our Product Registration App</Text>
                <Text className="mb-4">A simple and effective solution to manage your products.</Text>
                <TouchableOpacity className="bg-blue-500 rounded-lg py-3 px-6" onPress={handleGetStarted}>
                    <Text className="text-white font-bold text-lg">Get Started Now</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-col">
                <View className="bg-gray-200 rounded-lg p-4 mb-2">
                    <Text className="text-lg font-bold mb-2">Manage Your Products</Text>
                    <Text className="text-base">Register, update, and delete products easily.</Text>
                </View>
                <View className="bg-gray-200 rounded-lg p-4 mb-2">
                    <Text className="text-lg font-bold mb-2">Intuitive Interface</Text>
                    <Text className="text-base">A user-friendly and easy-to-use interface for all users.</Text>
                </View>
                <View className="bg-gray-200 rounded-lg p-4 mb-2">
                    <Text className="text-lg font-bold mb-2">Advanced Features</Text>
                    <Text className="text-base">Enjoy advanced features for a better product management experience.</Text>
                </View>
            </View>
            <View className="mt-12 mb-8 justify-center items-center">
                <TouchableOpacity className="bg-blue-500 rounded-lg py-3 px-6" onPress={handleGetAbout}>
                    <Text className="text-white font-bold text-lg">About Us</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

export default Home;