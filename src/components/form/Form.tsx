import React, {useState} from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {Config, ConfigContainer} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import PhotoPicker from "./PhotoPicker";
import {texts} from "../../texts";
import MyDatePicker from "./inputs/MyDatePicker";
import NumericInput from 'react-native-numeric-input';

export interface FormProps {
    config: Config;
    formValues?: FormValues;
    setFormValues: (formValues: FormValues) => void;
    setConfig: (config: ConfigContainer) => void;
}

export default function Form(props: FormProps) {
    const [localization, setLocalization] = useState('');
    const [clientName, setClientName] = useState('');
    const [startTimestamp, setStartTimestamp] = useState(new Date());
    const [endTimestamp, setEndTimestamp] = useState(new Date());
    const [numberOfPersons, setNumberOfPersons] = useState(1);
    const [comments, setComments] = useState('');
    const [photos, setPhotos] = useState<string[]>([]);

    const reopenConfig = () => {
        const newConfig = {config: props.config, initialized: false}
        props.setConfig(newConfig);
    }

    const handleSubmit = () => {
        const formValues: FormValues = {
            localization: localization,
            clientName: clientName,
            comments: comments,
            startTimestamp: startTimestamp,
            endTimestamp: endTimestamp,
            numberOfPersons: numberOfPersons,
            photos: photos,

            initialized: true
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
                <Text>{texts.form.localization}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setLocalization(e)}
                />
                <Text>{texts.form.clientName}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setClientName(e)}
                />

                <Text>{texts.form.startDate}</Text>
                <MyDatePicker setDate={setStartTimestamp}/>

                <Text>{texts.form.endDate}</Text>
                <MyDatePicker setDate={setEndTimestamp}/>

                <Text>{texts.form.numberOfPersons}</Text>
                <NumericInput value={numberOfPersons} onChange={value => setNumberOfPersons(value)}
                              minValue={0}/>


                <Text>{texts.form.comments}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setComments(e)}
                    numberOfLines={3}
                />


                <PhotoPicker addPhoto={addPhoto}/>
                {photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <Button title={texts.openConfig} onPress={reopenConfig}/>
                <Button title={texts.next} onPress={handleSubmit}/>
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
