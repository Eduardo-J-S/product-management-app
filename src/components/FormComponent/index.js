import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { PerfilContext } from '../../contexts';

const FormComponent = ({ handleClose, id, name, brand, option }) => {

    const { putProduct, postProducts, errorPost, setErrorPost } = useContext(PerfilContext);

    const [idForm, setIdForm] = useState(String(id));
    const [nameForm, setNameForm] = useState(name);
    const [brandForm, setBrandForm] = useState(brand);
    const [nameValid, setNameValid] = useState(true); // Inicialmente válido
    const [brandValid, setBrandValid] = useState(true); // Inicialmente válido

    useEffect(() => {
        if (errorPost.length > 0) {
            Alert.alert("Error", errorPost);
        }
    }, [errorPost]);

    async function updateProduct() {
        const productId = parseInt(id);
        putProduct(productId, nameForm, brandForm);

        setTimeout(() => {
            setErrorPost([]);
            handleClose()
        }, 2000);
    }

    function postProduct() {
        if (nameForm.trim() === '') {
            setNameValid(false);
            return;
        } else {
            setNameValid(true);
        }

        if (brandForm.trim() === '') {
            setBrandValid(false);
            return;
        } else {
            setBrandValid(true);
        }

        postProducts(nameForm, brandForm);
        setTimeout(() => {
            setErrorPost([]);
            handleClose()
        }, 2000);
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
                        value={idForm}
                        onChangeText={text => setIdForm(text)}
                        className="border border-gray-400 rounded p-2"
                    />
                </View>
                <View className="mb-4">
                    <Text>Name</Text>
                    <TextInput
                        placeholder='Product name'
                        value={nameForm}
                        onChangeText={text => {setNameForm(text);}}
                        className={`border ${nameValid ? 'border-green-500' : 'border-red-500'} rounded p-2`}
                    />
                </View>
                <View className="mb-4">
                    <Text>Brand</Text>
                    <TextInput
                        placeholder='Product brand'
                        value={brandForm}
                        onChangeText={text => {setBrandForm(text);}}
                        className={`border ${brandValid ? 'border-green-500' : 'border-red-500'} rounded p-2`}
                    />
                </View>
                <View className="flex flex-row justify-between w-full">
                    <TouchableOpacity
                        onPress={option === 'EDIT' ? () => updateProduct() : () => postProduct()}
                        className={`mb-8 w-1/3 ml-27 py-2 rounded-lg ${option === 'EDIT' ? 'bg-blue-500' : 'bg-green-500'}`}
                    >
                        {
                            option === 'EDIT' ?
                                <Text className="text-white text-center font-bold">Update</Text> :
                                <Text className="text-white text-center font-bold">Save</Text>
                        }
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
