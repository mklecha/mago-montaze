import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY, DEFAULT_MAIL} from "../../vars";
import {ConfigContainer} from "../../model/Config";
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput} from "react-native";
import {texts} from "../../texts";

export interface ConfigFormProps {
    config?: ConfigContainer
    setConfig: (config: ConfigContainer) => void;
}

export default function ConfigForm(props: ConfigFormProps) {
    const [name, setName] = useState(props.config?.config?.name || '');
    const [mail, setMail] = useState(props.config?.config?.mail || DEFAULT_MAIL);

    const saveConfiguration = () => {
        const config = {
            name: name,
            mail: mail
        }
        AsyncStorage.setItem(CONFIG_KEY, JSON.stringify(config)).then(() => {
            props.setConfig({
                initialized: true,
                config: config
            })
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>{texts.config.title}</Text>
                <Text>{texts.config.yourName}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setName(e)}
                    defaultValue={props.config?.config?.name || ''}
                />
                <Text>{texts.config.receiverMail}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setMail(e)}
                    defaultValue={props.config?.config?.mail || DEFAULT_MAIL}
                />
                <Button title={texts.config.save} onPress={saveConfiguration}/>
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
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
    }
});
