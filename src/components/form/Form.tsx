import React, {useState} from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput} from 'react-native';
import {Config, ConfigContainer} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import PhotoPicker from "./inputs/PhotoPicker";
import {texts} from "../../texts";
import MyDatePicker from "./inputs/MyDatePicker";
import NumericInput from 'react-native-numeric-input';
import {validateForm} from "./validator";

export interface FormProps {
    config: Config;
    formValues?: FormValues;
    setFormValues: (formValues: FormValues) => void;
    setConfig: (config: ConfigContainer) => void;
}

export default function Form(props: FormProps) {
    const [jobSuccessful, setJobSuccessful] = useState(true);
    const [localization, setLocalization] = useState('');
    const [clientName, setClientName] = useState('');
    const [startTimestamp, setStartTimestamp] = useState<Date>();
    const [endTimestamp, setEndTimestamp] = useState<Date>();
    const [numberOfPersons, setNumberOfPersons] = useState(1);
    const [comments, setComments] = useState('');
    const [photos, setPhotos] = useState<string[]>([]);

    const reopenConfig = () => {
        const newConfig = {config: props.config, initialized: false}
        props.setConfig(newConfig);
    }

    const handleSubmit = () => {
        const formValues: FormValues = {
            jobSuccessful: jobSuccessful,
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
                <Text>{texts.form.title}</Text>

                <Text>{texts.form.jobSuccessful}</Text>
                <Switch value={jobSuccessful} onValueChange={value => setJobSuccessful(value)}/>

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
                <MyDatePicker setDate={setEndTimestamp} minimumDate={startTimestamp}/>

                <Text>{texts.form.numberOfPersons}</Text>
                <NumericInput
                    containerStyle={styles.numberInput}
                    value={numberOfPersons}
                    onChange={value => setNumberOfPersons(value)}
                    minValue={0}
                />


                <Text>{texts.form.comments}</Text>
                <TextInput
                    style={styles.multiline}
                    onChangeText={e => setComments(e)}
                    multiline={true}
                    numberOfLines={3}
                />


                <PhotoPicker addPhoto={addPhoto}/>
                {photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <Button title={texts.openConfig} onPress={reopenConfig}/>
                <Button title={texts.next} onPress={handleSubmit} disabled={!validateForm({
                    jobSuccessful: jobSuccessful,
                    localization: localization,
                    clientName: clientName,
                    comments: comments,
                    startTimestamp: startTimestamp,
                    endTimestamp: endTimestamp,
                    numberOfPersons: numberOfPersons,
                    photos: photos,
                    initialized: false
                })}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 50
    },
    numberInput: {
        padding: 8,
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
    },
    multiline: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        textAlignVertical: "top"
    }
});
