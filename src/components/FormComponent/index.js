import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const FormComponent = ({ handleClose }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [nameValid, setNameValid] = useState(true); // Inicialmente válido
    const [brandValid, setBrandValid] = useState(true); // Inicialmente válido
    const [isLoading, setIsLoading] = useState(false); // Para controle de carregamento


    function postProduct() {

    }

    return (
        <View className="flex-1 p-2">
            <TouchableOpacity style={{ flex: 1, zIndex: 9, backgroundColor: 'rgba(0,0,0, 0.2)' }} onPress={handleClose}></TouchableOpacity>
            <View className="bg-white p-4 rounded-lg">
                <View className="mb-4">
                    <Text>ID</Text>
                    <TextInput
                        editable={false}
                        placeholder='Product ID'
                        value={id}
                        onChangeText={setId}
                        className="border border-gray-400 rounded p-2"
                    />
                </View>
                <View className="mb-4">
                    <Text>Name</Text>
                    <TextInput
                        placeholder='Product name'
                        value={name}
                        onChangeText={text => {
                            setName(text);
                            // Adicione lógica de validação aqui
                        }}
                        className={`border ${nameValid ? 'border-green-500' : 'border-red-500'} rounded p-2`}
                        editable={!isLoading}
                    />
                </View>
                <View className="mb-4">
                    <Text>Brand</Text>
                    <TextInput
                        placeholder='Product brand'
                        value={brand}
                        onChangeText={text => {
                            setBrand(text);
                            // Adicione lógica de validação aqui
                        }}
                        className={`border ${brandValid ? 'border-green-500' : 'border-red-500'} rounded p-2`}
                        editable={!isLoading}
                    />
                </View>
                <View className="flex flex-row justify-between w-full">
                    <TouchableOpacity
                        onPress={() => postProduct()}
                        className="bg-blue-500 mb-8 w-1/3 ml-27 py-2 rounded-lg"
                    >
                        <Text className="text-white text-center font-bold">Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleClose}
                        className="bg-stone-600 mb-8 w-1/3 ml-27 py-2 rounded-lg"
                    >
                        <Text className="text-white text-center font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FormComponent;
