import React, {useState} from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import ConfigProvider from "./components/configProvider/ConfigProvider";
import {ConfigContainer} from "./model/Config";
import FormContainer from "./components/form/FormContainer";

export default function Application() {
    const [config, setConfig] = useState<ConfigContainer>();

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ConfigProvider config={config} setConfig={setConfig}>
                <FormContainer config={config} setConfig={setConfig}/>
            </ConfigProvider>
        </TouchableWithoutFeedback>
    );
}
