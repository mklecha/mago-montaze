import React, {useEffect} from 'react';
import {Button, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {ImagePickerResult} from "expo-image-picker";
import {ImagePickerOptions} from "expo-image-picker/src/ImagePicker.types";
import {texts} from '../../../texts';

export interface PhotoPickerProps {
    addPhoto: (photoURI: string) => void;
}

export default function PhotoPicker(props: PhotoPickerProps) {
    const photoOptions: ImagePickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.2,
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                let response = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (response.status !== 'granted') {
                    alert(texts.photoPicker.permissionGalleryAlert);
                }
                response = await ImagePicker.requestCameraPermissionsAsync();
                if (response.status !== 'granted') {
                    alert(texts.photoPicker.permissionCameraAlert);
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync(photoOptions);

        if (!result.cancelled) {
            props.addPhoto(result.uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync(photoOptions)

        if (!result.cancelled) {
            props.addPhoto(result.uri);
        }
    };

    return (
        <>
            <Button title={texts.photoPicker.takePhoto} onPress={takePhoto}/>
            <Button title={texts.photoPicker.pickPhoto} onPress={pickImage}/>
        </>
    );
}
