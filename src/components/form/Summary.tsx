import React from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
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
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Summary</Text>
                <Text>{JSON.stringify(props.config, undefined, "\t")}</Text>
                <Text>{JSON.stringify(props.formValues, undefined, "\t")}</Text>
                {props.formValues.photos.map((value: string, index: number) => (
                    <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
                ))}
                <Button title={texts.back} onPress={handleBack}/>
                <Button title={texts.sendMail} onPress={handleSend}/>
                <Button title={texts.finish} onPress={handleFinish}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
