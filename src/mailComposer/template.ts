import {FormValues} from "../model/FormValues";

export const composeTitle = (name: string, startDate: Date) => {
    return `Raport montażu: ${startDate.toLocaleDateString()}, ${name}`
}

export const composeBody = (name: string, formValues: FormValues) => {
    return `<p>Raport montażu<br/>
<b>Zgłaszający:</b> ${name}<br/>
<br/>    
${formValues.jobSuccessful ? 'Montaż udany' : 'Montaż nieudany'}<br/>
<b>Lokalizacja:</b> ${formValues.localization}<br/>
<b>Nazwa klienta:</b> ${formValues.clientName}<br/>
<b>Data rozpoczęcia:</b> ${formValues.startTimestamp.toLocaleDateString()}<br/>
<b>Data zakończenia:</b> ${formValues.endTimestamp.toLocaleDateString()}<br/>
<br/>
<b>Liczba osób:</b> ${formValues.numberOfPersons}<br/>
<b>Uwagi:</b> ${formValues.comments.length > 0 ? formValues.comments : 'Brak'}<br/>
<br/>
${((formValues.photos || []).length > 0) ? 'Zdjęcia w załączniku<br/>' : ''}
Pozdrawiam,
${name}</p>`;
}
