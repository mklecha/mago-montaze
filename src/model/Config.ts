export interface ConfigContainer {
    initialized: boolean;
    config?: Config;
}

export interface Config {
    name: string;
    mail: string;
}
