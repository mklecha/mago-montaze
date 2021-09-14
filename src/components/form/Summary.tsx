import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {texts} from "../../texts";
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import {composeMail} from "./composeMail";

export interface SummaryProps {
    config: Config,
    formValues: FormValues;
}

export default function Summary(props: SummaryProps) {

    const handleSend = () => {
        composeMail(props.config, props.formValues);
    }

    return (
        <View style={styles.container}>
            <Text>Summary</Text>
            <Text>{JSON.stringify(props.config, undefined, "\t")}</Text>
            <Text>{JSON.stringify(props.formValues, undefined, "\t")}</Text>
            {props.formValues.photos.map((value: string, index: number) => (
                <Image key={index} source={{uri: value}} style={{width: 200, height: 200}}/>
            ))}
            <Button title={texts.back} onPress={handleSend}/>
            <Button title={texts.sendMail} onPress={handleSend}/>
            <Button title={texts.finish} onPress={() => {
            }}/>
        </View>
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
