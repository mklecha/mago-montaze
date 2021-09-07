import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY, DEFAULT_MAIL} from "../../vars";
import {ConfigContainer} from "../../model/Config";
import {Button, StyleSheet, TextInput, Text, View} from "react-native";
import {texts} from "../../texts";

export interface ConfigFormProps {
    config?: ConfigContainer
    setConfig: (config: ConfigContainer) => void;
}

export default function ConfigForm(props: ConfigFormProps) {
    const [name, setName] = useState('');
    const [mail, setMail] = useState(DEFAULT_MAIL);

    const saveConfiguration = () => {
        const config = {
            name: name,
            mail: mail
        }
        AsyncStorage.setItem(CONFIG_KEY, JSON.stringify(config)).then(() => {
            props.setConfig({
                initialized: true,
                config: {
                    name: name,
                    mail: mail
                }
            })
        });
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
            <Button title={texts.send} onPress={saveConfiguration}/>
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
