import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";

export interface FormProps {
    config?: Config;
    setFormValues: (formValues: FormValues) => void;
}

export default function Form(props: FormProps) {
    const [line1, setLine1] = useState('');

    const handleSubmit = () => {
        const formValues: FormValues = {
            line1: line1
        };
        props.setFormValues(formValues);
    }

    return (
        <View style={styles.container}>
            <Text>Config:</Text>
            <Text>{JSON.stringify(props.config)}</Text>
            <Text>Label</Text>
            <TextInput
                style={styles.input}
                onChangeText={e => setLine1(e)}
            />
            <Button title={'Next'} onPress={handleSubmit}/>
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
