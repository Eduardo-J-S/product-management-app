import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ProductTable = ({ products }) => {
  return (
    <ScrollView>
      <View className="flex-row border-b border-gray-400 p-2">
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
        <View key={product.id} className="flex-row border-b border-gray-400 p-2">
          <View className="flex-1">
            <Text>{product.name}</Text>
          </View>
          <View className="flex-1">
            <Text>{product.brand}</Text>
          </View>
          <View className="flex-1">
            <Text>View/Edit</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default ProductTable;
