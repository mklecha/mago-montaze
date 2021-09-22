export interface FormValues {
    jobSuccessful: boolean;
    localization: string;
    clientName: string;
    startTimestamp: Date;
    endTimestamp: Date;
    numberOfPersons: number;
    comments: string;
    photos: string[];

    initialized: boolean;
}
