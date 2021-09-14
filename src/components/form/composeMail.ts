import * as MailComposer from 'expo-mail-composer';
import {MailComposerOptions, MailComposerResult} from "expo-mail-composer";
import {Config} from "../../model/Config";
import {FormValues} from "../../model/FormValues";

const composeBody = (name: string, formValues: FormValues) => {
    return `<h1>axxxx</h1><br/>xxxxx`;
}

const composeOptions = (config: Config, formValues: FormValues): MailComposerOptions => {
    const body = composeBody(config.name, formValues);

    return {
        recipients: [config.mail],
        subject: 'Test',
        body: body,
        isHtml: true
    }
}

export const composeMail = (config: Config, formValues: FormValues): Promise<MailComposerResult> => {
    const options = composeOptions(config, formValues);
    return MailComposer.composeAsync(options);
}
