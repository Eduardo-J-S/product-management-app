import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import FormComponent from '../FormComponent';

import { PerfilContext } from '../../contexts';

const ProductTable = ({ productsAll }) => {

  const { findById, deleteProduct } = useContext(PerfilContext);

  const [id, setId] = useState('')
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [option, setOption] = useState('POST')

  const [visibleModal, setVisibleModal] = useState(false);

  async function edit(productId) {
    try {
      const response = await findById(productId);
      setId(response.id);
      setName(response.name);
      setBrand(response.brand);
      setOption('EDIT')
      setVisibleModal(true);
    } catch (error) {
      console.log("Ocorreu um erro ao buscar o produto pelo ID:", error);
    }
  }

  function newPost(){
    setId('');
    setName('');
    setBrand('');
    setOption('POST');
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
          onPress: () => deleteProduct(id_question)
        }
      ]
    );

  return (
    <ScrollView>
       <TouchableOpacity
        className="bg-blue-500 px-4 py-2 rounded-lg mt-1 mx-1 w-1/3"
        onPress={() => newPost()}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>New Post</Text>
      </TouchableOpacity>
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
      {productsAll.map((product) => (
        <View key={product.id} className="flex-row border-b border-gray-400 p-2 px-4">
          <View className="flex-1">
            <Text>{product.name}</Text>
          </View>
          <View className="flex-1">
            <Text>{product.brand}</Text>
          </View>
          <View className="flex-1 flex-row px-5 gap-1">
            <TouchableOpacity className="bg-blue-500 rounded-lg py-1 px-3" onPress={() => edit(product.id)}>
              <Text className="text-white font-bold text-sm">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-500 rounded-lg py-1 px-3" onPress={() => wantToDelete(product.id)}>
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
        <FormComponent
          handleClose={() => setVisibleModal(false)}
          id={id}
          name={name}
          brand={brand}
          option={option}
        />
      </Modal>
    </ScrollView>
  );
}

export default ProductTable;
