import React, {PropsWithChildren, useEffect} from 'react';
import {ConfigContainer} from "../../model/Config";
import Loading from "./Loading";
import ConfigForm from "./ConfigForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY} from "../../vars";

export interface ConfigProviderProps extends PropsWithChildren<{}> {
    config?: ConfigContainer
    setConfig: (config: ConfigContainer) => void;
}

export default function ConfigProvider(props: ConfigProviderProps) {

    useEffect(() => {
        AsyncStorage.getItem(CONFIG_KEY).then(data => {
            const deserializedConfig = data != null ? JSON.parse(data) : {};
            const config = constructConfig(deserializedConfig);
            props.setConfig(config);
        });
    }, [])

    const constructConfig = (deserializedConfig: any): ConfigContainer => {
        if(!!deserializedConfig.name && !!deserializedConfig.mail){
            return {
                initialized: true,
                config: {
                    name: deserializedConfig.name,
                    mail: deserializedConfig.mail
                }
            }
        }
        return {
            initialized: false
        }
    }

    const getScreen = () => {
        if (!props.config) {
            return <Loading/>;
        }
        if (!props.config.initialized) {
            return <ConfigForm {...props}/>
        }
        return <>{props.children}</>
    }

    return getScreen();
}
