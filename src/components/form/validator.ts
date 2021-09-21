import {FormValues} from "../../model/FormValues";

export const validateForm = (formValues: FormValues) => {
    return !!formValues.startTimestamp &&
        !!formValues.endTimestamp &&
        !!formValues.clientName && !(formValues.clientName === '') &&
        !!formValues.localization && !(formValues.localization === '');
}
