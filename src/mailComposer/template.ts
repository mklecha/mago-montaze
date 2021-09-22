import {FormValues} from "../model/FormValues";

export const composeTitle = (name: string, startDate: Date) => {
    return `Raport montażu: ${startDate.toLocaleDateString()}, ${name}`
}

export const composeBody = (name: string, formValues: FormValues) => {
    return `Raport montażu
Zgłaszający: ${name}
    
${formValues.jobSuccessful? 'Montaż udany' : 'Montaż nieudany'}
Lokalizacja: ${formValues.localization}
Nazwa klienta: ${formValues.clientName}
Data rozpoczęcia: ${formValues.startTimestamp.toLocaleDateString()}
Data zakończenia: ${formValues.endTimestamp.toLocaleDateString()}

Liczba osób: ${formValues.numberOfPersons}
Uwagi: ${formValues.comments}

Zdjęcia w załączniku`;
}
