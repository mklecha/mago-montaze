import React, {useState} from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput} from 'react-native';
import {Config, ConfigContainer} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import PhotoPicker from "./inputs/PhotoPicker";
import {texts} from "../../texts";
import MyDatePicker from "./inputs/MyDatePicker";
import NumericInput from 'react-native-numeric-input';
import {validateForm} from "./validator";
import MyHeader from "../MyHeader";

export interface FormProps {
    config: Config;
    formValues?: FormValues;
    setFormValues: (formValues: FormValues) => void;
    setConfig: (config: ConfigContainer) => void;
}

const useIfDefined = (value: any, defaultValue: any) => {
    if(value !== undefined){
        return value;
    }
    return defaultValue;
}

export default function Form(props: FormProps) {
    const [jobSuccessful, setJobSuccessful] = useState(useIfDefined(props.formValues?.jobSuccessful, true) );
    const [localization, setLocalization] = useState(props.formValues?.localization || '');
    const [clientName, setClientName] = useState(props.formValues?.clientName || '');
    const [startTimestamp, setStartTimestamp] = useState(props.formValues?.startTimestamp);
    const [endTimestamp, setEndTimestamp] = useState(props.formValues?.endTimestamp);
    const [numberOfPersons, setNumberOfPersons] = useState(useIfDefined(props.formValues?.numberOfPersons, 1));
    const [comments, setComments] = useState(props.formValues?.comments || '');
    const [photos, setPhotos] = useState<string[]>(props.formValues?.photos || []);

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
            startTimestamp: startTimestamp!,
            endTimestamp: endTimestamp!,
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
                <MyHeader title={texts.form.title} openConfig={reopenConfig}/>

                <Text>{texts.form.jobSuccessful}</Text>
                <Switch value={jobSuccessful} onValueChange={value => setJobSuccessful(value)}/>

                <Text>{texts.form.localization}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setLocalization(e)}
                    defaultValue={props.formValues?.localization || ''}
                />
                <Text>{texts.form.clientName}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setClientName(e)}
                    defaultValue={props.formValues?.clientName || ''}
                />

                <Text>{texts.form.startDate}</Text>
                <MyDatePicker setDate={setStartTimestamp} defaultDate={startTimestamp}/>

                <Text>{texts.form.endDate}</Text>
                <MyDatePicker setDate={setEndTimestamp} minimumDate={startTimestamp} defaultDate={endTimestamp}/>

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
                    defaultValue={props.formValues?.comments || ''}
                />


                <PhotoPicker addPhoto={addPhoto}/>
                {photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <Button title={texts.next} onPress={handleSubmit} disabled={!validateForm({
                    jobSuccessful: jobSuccessful,
                    localization: localization,
                    clientName: clientName,
                    comments: comments,
                    startTimestamp: startTimestamp!,
                    endTimestamp: endTimestamp!,
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
