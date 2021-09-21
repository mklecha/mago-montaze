export interface FormValues {
    localization: string;
    clientName: string;
    startTimestamp?: Date;
    endTimestamp?: Date;
    numberOfPersons: number;
    comments: string;
    photos: string[];

    initialized: boolean;
}
