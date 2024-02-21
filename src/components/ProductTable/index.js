import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ProductTable = ({ products }) => {
  return (
    <ScrollView>
      <View className="flex-row border-b border-gray-400 p-2 px-4">
        <View className="flex-1">
          <Text>Name</Text>
        </View>
        <View className="flex-1">
          <Text>Brand</Text>
        </View>
        <View className="flex-1">
          <Text>Options</Text>
        </View>
      </View>
      {products.map((product) => (
        <View key={product.id} className="flex-row border-b border-gray-400 p-2 px-4">
          <View className="flex-1">
            <Text>{product.name}</Text>
          </View>
          <View className="flex-1">
            <Text>{product.brand}</Text>
          </View>
          <View className="flex-1 flex-row px-5 gap-1">
            <TouchableOpacity className="bg-blue-500 rounded-lg py-1 px-3">
              <Text className="text-white font-bold text-sm">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-500 rounded-lg py-1 px-3">
              <Text className="text-white font-bold text-sm">Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default ProductTable;
