import React, {useEffect} from 'react';
import {Button, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {ImagePickerResult} from "expo-image-picker";

export interface PhotoPickerProps {
    addPhoto: (photoURI: string) => void;
}

export default function PhotoPicker(props: PhotoPickerProps) {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.2,
        });

        if (!result.cancelled) {
            props.addPhoto(result.uri);
        }
    };

    return (
        <Button title="Pick an image from camera roll" onPress={pickImage}/>
    );
}
