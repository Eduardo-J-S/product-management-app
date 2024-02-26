import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import FormComponent from '../FormComponent';

const ProductTable = ({ products }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  function edit() {
    setVisibleModal(true);
  }

  const wantToDelete = (id_question) =>
    Alert.alert(
      "Delete",
      "Do you want to delete this question?",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Canceled"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => Alert.alert("Deleted")
        }
      ]
    );

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
            <TouchableOpacity className="bg-blue-500 rounded-lg py-1 px-3" onPress={() => edit()}>
              <Text className="text-white font-bold text-sm">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-500 rounded-lg py-1 px-3" onPress={() => wantToDelete()}>
              <Text className="text-white font-bold text-sm">Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <FormComponent handleClose={() => setVisibleModal(false)} visible={visibleModal} />
      </Modal>
    </ScrollView>
  );
}

export default ProductTable;
