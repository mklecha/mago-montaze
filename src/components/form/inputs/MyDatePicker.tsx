import React, {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Keyboard, TextInput} from "react-native";
import {texts} from "../../../texts";
import {inputStyles} from "../../../styles";

export interface MyDatePickerProps {
    setDate: (date: Date) => void;
    minimumDate?: Date;
    defaultDate?: Date;
}

export default function MyDatePicker(props: MyDatePickerProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.defaultDate);

    const handleChange = (event: any, selectedDate: any) => {
        setOpen(false);
        setValue(selectedDate);
        props.setDate(selectedDate);

        Keyboard.dismiss();
    };


    return (
        <>
            <TextInput
                value={!!value ? value.toLocaleDateString() : texts.datePicker.selectDate}
                style={inputStyles.input}
                onFocus={() => setOpen(true)}/>
            {open && (<DateTimePicker
                    testID="dateTimePicker"
                    value={value || new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={handleChange}
                    minimumDate={props.minimumDate}
                />
            )}
        </>
    )
}
