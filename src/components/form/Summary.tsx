import React, {useEffect} from 'react';
import {Alert, BackHandler, Button, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {texts} from "../../texts";
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import {composeMail} from "../../mailComposer/composeMail";
import MyHeader from "../MyHeader";
import {containerStyles, photoPickerStyles, summaryStyles} from '../../styles';

export interface SummaryProps {
    config: Config,
    setFormValues: (formValues: FormValues) => void;
    formValues: FormValues;
}

export default function Summary(props: SummaryProps) {

    useEffect(() => {
        const backAction = () => {
            handleBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);


    const getField = (label: string, value: string) => (
        <View style={summaryStyles.field}>
            <Text>{label}: </Text>
            <Text style={summaryStyles.fieldValue}>{value}</Text>
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
        <SafeAreaView style={containerStyles.container}>
            <ScrollView>
                <MyHeader title={texts.summary.title}/>
                <View style={containerStyles.innerContainer}>

                    {getField(texts.form.jobSuccessful, props.formValues.jobSuccessful ? texts.yes : texts.no)}
                    {getField(texts.form.localization, props.formValues.localization)}
                    {getField(texts.form.clientName, props.formValues.clientName)}
                    {getField(texts.form.startDate, props.formValues.startTimestamp!.toLocaleDateString())}
                    {getField(texts.form.endDate, props.formValues.startTimestamp!.toLocaleDateString())}
                    {getField(texts.form.numberOfPersons, '' + props.formValues.numberOfPersons)}
                    {getField(texts.form.comments, '' + props.formValues.comments)}

                    <Text>{texts.form.photos}:</Text>
                    {(props.formValues.photos || []).length > 0 && (
                        <View style={[photoPickerStyles.photosContainer, summaryStyles.photosContainer]}>
                            {props.formValues.photos.map((value: string, index: number) => (
                                <View key={index} style={photoPickerStyles.photoContainer}>
                                    <Image source={{uri: value}} style={photoPickerStyles.photo} resizeMode={'contain'}/>
                                </View>
                            ))}
                        </View>
                        )}
                    <View style={summaryStyles.button}><Button title={texts.back} onPress={handleBack}/></View>
                    <View style={summaryStyles.button}><Button title={texts.summary.sendMail} onPress={handleSend}/></View>
                    <View style={summaryStyles.divider}/>
                    <View style={summaryStyles.button}><Button title={texts.summary.finish} onPress={handleFinish}/></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
