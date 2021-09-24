import React from 'react';
import {Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {texts} from "../../texts";
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import {composeMail} from "../../mailComposer/composeMail";
import MyHeader from "../MyHeader";

export interface SummaryProps {
    config: Config,
    setFormValues: (formValues: FormValues) => void;
    formValues: FormValues;
}

export default function Summary(props: SummaryProps) {

    const getField = (label: string, value: string) => (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text>{label}: </Text>
            <Text style={styles.formValue}>{value}</Text>
        </View>
    )

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
                <MyHeader title={texts.summary.title}/>

                {getField(texts.form.jobSuccessful, props.formValues.jobSuccessful ? texts.yes : texts.no)}
                {getField(texts.form.localization, props.formValues.localization)}
                {getField(texts.form.clientName, props.formValues.clientName)}
                {getField(texts.form.startDate, props.formValues.startTimestamp!.toLocaleDateString())}
                {getField(texts.form.endDate, props.formValues.startTimestamp!.toLocaleDateString())}
                {getField(texts.form.numberOfPersons, '' + props.formValues.numberOfPersons)}
                {getField(texts.form.comments, '' + props.formValues.comments)}

                <Text>{texts.form.photos}</Text>
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
    },
    formValue: {
        fontWeight: 'bold'
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
    }
});
