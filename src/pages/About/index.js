import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, paddingBottom: 20 }}>
      <View className="px-4">
        <Text className="text-3xl font-bold mb-6">About Us</Text>
        <Text className="text-lg mb-4 text-justify">Welcome to our Product Management Application!</Text>
        <Text className="text-lg mb-4 text-justify">We are a dedicated team passionate about creating innovative solutions for product management. Our mission is to provide users with intuitive tools and advanced features to streamline the process of registering, updating, and managing their products.</Text>
        <Text className="text-lg mb-4 text-justify">At our core, we believe in simplicity, effectiveness, and continuous improvement. Our vision is to empower businesses and individuals with the tools they need to succeed in today's competitive market.</Text>
        <Text className="text-2xl font-bold mt-8 mb-4">Technologies Used</Text>
        <Text className="text-lg mb-4 text-justify">Our application is built using the latest technologies and frameworks to ensure reliability, scalability, and performance. Some of the key technologies we use include React Native for the frontend, Spring Boot for the backend, and PostgreSQL for the database.</Text>
        <Text className="text-2xl font-bold mb-4">Contact Us</Text>
        <Text className="text-lg mb-4 text-justify">If you have any questions, feedback, or inquiries, please feel free to reach out to us at <Text className="text-blue-500" onPress={() => Linking.openURL('mailto:contact@example.com')}>contact@example.com</Text>. We'd love to hear from you!</Text>
      </View>
    </ScrollView>
  );
}

export default About;
