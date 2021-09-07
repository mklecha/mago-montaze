import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY} from "../vars";

export default function Configure() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('default@mail.com');

    const saveConfiguration = () => {
        const config = {
            name: name,
            mail: mail
        }
        AsyncStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    }

    return (
        <View style={styles.container}>
            <Text>Configuration</Text>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={e => setName(e)}
            />
            <Text>Mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={e => setMail(e)}
            />
            <Button title={"Send"} onPress={saveConfiguration}/>
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
