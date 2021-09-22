import * as MailComposer from 'expo-mail-composer';
import {MailComposerOptions, MailComposerResult} from "expo-mail-composer";
import {Config} from "../model/Config";
import {FormValues} from "../model/FormValues";
import {composeBody, composeTitle} from "./template";

const composeOptions = (config: Config, formValues: FormValues): MailComposerOptions => ({
    recipients: [config.mail],
    subject: composeTitle(config.name, formValues.startTimestamp),
    body: composeBody(config.name, formValues),
    isHtml: true,
    attachments: formValues.photos
});

export const composeMail = (config: Config, formValues: FormValues): Promise<MailComposerResult> => {
    const options = composeOptions(config, formValues);
    return MailComposer.composeAsync(options);
}
