import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY, DEFAULT_MAIL} from "../../vars";
import {ConfigContainer} from "../../model/Config";
import {Button, Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {texts} from "../../texts";
import MyHeader from "../MyHeader";
import {containerStyles, inputStyles} from "../../styles";
import logo from "../../../assets/name.png";

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
        <SafeAreaView style={containerStyles.container}>
            <ScrollView>
                <MyHeader title={texts.config.title}/>

                <View style={[containerStyles.center, containerStyles.logoMargins]}>
                    <Image source={logo}/>
                </View>

                <View style={containerStyles.innerContainer}>
                    <Text style={inputStyles.label}>{texts.config.yourName}</Text>
                    <TextInput
                        style={inputStyles.input}
                        onChangeText={e => setName(e)}
                        defaultValue={props.config?.config?.name || ''}
                    />

                    <Text style={inputStyles.label}>{texts.config.receiverMail}</Text>
                    <TextInput
                        style={inputStyles.input}
                        onChangeText={e => setMail(e)}
                        defaultValue={props.config?.config?.mail || DEFAULT_MAIL}
                    />
                    <View style={inputStyles.button}>
                        <Button title={texts.config.save} onPress={saveConfiguration} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
