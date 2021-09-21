import React from 'react';
import {Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {texts} from "../../texts";
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import {composeMail} from "./composeMail";

export interface SummaryProps {
    config: Config,
    setFormValues: (formValues: FormValues) => void;
    formValues: FormValues;
}

export default function Summary(props: SummaryProps) {

    const handleBack = () => {
        const newFormValues = {...props.formValues, initialized: false};
        props.setFormValues(newFormValues);
    }

    const handleSend = () => {
        composeMail(props.config, props.formValues);
    }

    const handleFinish = () => {
        const alertTexts = texts.summary.alert;
        Alert.alert(
            alertTexts.title,
            alertTexts.message,
            [
                {text: alertTexts.cancel},
                {text: alertTexts.ok, onPress: () => props.setFormValues({} as FormValues)}
            ]
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>{texts.summary.title}</Text>
                {props.formValues.photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <View style={styles.button}><Button title={texts.back} onPress={handleBack}/></View>
                <View style={styles.button}><Button title={texts.summary.sendMail} onPress={handleSend}/></View>
                <View style={styles.button}><Button title={texts.summary.finish} onPress={handleFinish}/></View>
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
    button: {
        borderWidth: 1,
        borderColor: '#fff',
    }
});
