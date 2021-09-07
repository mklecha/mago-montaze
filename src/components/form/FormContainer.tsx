import React, {useState} from 'react';
import {ConfigContainer} from "../../model/Config";
import {FormValues} from "../../model/FormValues";
import Summary from "./Summary";
import Form from "./Form";

export interface FormContainerProps {
    config?: ConfigContainer
}

export default function FormContainer(props: FormContainerProps) {
    const [formValues, setFormValues] = useState<FormValues>();

    const getScreen = () => {
        const config = props.config!.config!;
        if (!formValues) {
            return <Form config={config} setFormValues={setFormValues}/>
        }
        return <Summary config={config} formValues={formValues}/>
    }

    return getScreen();
}
