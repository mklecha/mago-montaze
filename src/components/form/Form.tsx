import React, {useState} from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import PhotoPicker from "./PhotoPicker";

export interface FormProps {
    config?: Config;
    setFormValues: (formValues: FormValues) => void;
}

export default function Form(props: FormProps) {
    const [line1, setLine1] = useState('');
    const [photos, setPhotos] = useState<string[]>([]);

    const handleSubmit = () => {
        const formValues: FormValues = {
            line1: line1,
            photos: photos
        };
        props.setFormValues(formValues);
    }

    const addPhoto = (photoURI: string) => {
        const newPhotos = [...photos, photoURI]
        setPhotos(newPhotos);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Config:</Text>
                <Text>{JSON.stringify(props.config)}</Text>
                <Text>Label</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setLine1(e)}
                />
                <PhotoPicker addPhoto={addPhoto}/>
                {photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <Button title={'Next'} onPress={handleSubmit}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
