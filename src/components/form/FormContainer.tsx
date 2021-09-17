import React, {useState} from 'react';
import {ConfigContainer} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import Summary from "./Summary";
import Form from "./Form";

export interface FormContainerProps {
    config?: ConfigContainer;
    setConfig: (config: ConfigContainer) => void;
}

export default function FormContainer(props: FormContainerProps) {
    const [formValues, setFormValues] = useState<FormValues>();

    const getScreen = () => {
        const config = props.config!.config!;
        if (!formValues || !formValues.initialized) {
            return <Form config={config} setConfig={props.setConfig} formValues={formValues} setFormValues={setFormValues} />
        }
        return <Summary config={config} formValues={formValues} setFormValues={setFormValues}/>
    }

    return getScreen();
}
