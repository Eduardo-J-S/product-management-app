import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ProductTable from '../../components/ProductTable';
import { PerfilContext } from '../../contexts';

const Products = () => {
  const { products } = useContext(PerfilContext);

  const productsTable = [
    {
      "id": 1,
      "name": "Produto 1",
      "brand": "Marca A"
    },
    {
      "id": 2,
      "name": "Produto 2",
      "brand": "Marca B"
    },
    {
      "id": 3,
      "name": "Produto 3",
      "brand": "Marca C"
    },
    {
      "id": 4,
      "name": "Produto 4",
      "brand": "Marca D"
    },
  ]
  return (
    <View className="flex-1 bg-gray-100 p-4 mt-5">
      <View className="mb-6">
        <Text className="text-2xl font-bold">Product list</Text>
      </View>
      <View className="bg-white rounded-lg p-4">
        <ProductTable productsAll={products} />
      </View>
    </View>
  );
}

export default Products;