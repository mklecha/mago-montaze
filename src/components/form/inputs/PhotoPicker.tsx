import React, {useEffect} from 'react';
import {Alert, Button, Image, Platform, Pressable, Text, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {ImagePickerResult} from 'expo-image-picker';
import {ImagePickerOptions} from 'expo-image-picker/src/ImagePicker.types';
import {texts} from '../../../texts';
import {photoPickerStyles} from '../../../styles';

export interface PhotoPickerProps {
    addPhoto: (photoURI: string) => void;
    removePhoto: (photoIndex: number) => void;
    photos: string[];
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

    const handlePhotoPress = (photoIndex: number) => {
        const alertTexts = texts.photoPicker.alert;
        Alert.alert(
            alertTexts.title,
            alertTexts.message,
            [
                {text: alertTexts.cancel},
                {text: alertTexts.ok, onPress: () => props.removePhoto(photoIndex)}
            ]
        );
    }

    return (
        <View style={photoPickerStyles.container}>
            <View style={photoPickerStyles.photosContainer}>
                {props.photos.map((value: string, index: number) => (
                    <View key={index} style={photoPickerStyles.photoContainer}>
                        <Pressable onPress={() => handlePhotoPress(index)}>
                            <Image source={{uri: value}} style={photoPickerStyles.photo} resizeMode={'contain'}/>
                        </Pressable>
                    </View>
                ))}
            </View>
            <Button title={texts.photoPicker.takePhoto} onPress={takePhoto}/>
            <Text style={photoPickerStyles.orButton}>{texts.or}</Text>
            <Button title={texts.photoPicker.pickPhoto} onPress={pickImage}/>
        </View>
    );
}
