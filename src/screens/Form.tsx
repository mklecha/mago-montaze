import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Form() {
    const [line1, setLine1] = useState('');

    const handleSubmit = () => {
        const formValues = {
            line1
        }
    }

    return (
        <View style={styles.container}>
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
