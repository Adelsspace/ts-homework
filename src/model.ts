export const Reset = '\x1b[0m';
export const effects = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};
export const fontColors: TColors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const colors: string[] = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'white', 'yellow'];
export const backgroundColors: TColors = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};
export const contrast: TColors = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
type TColorOptions = {
    font?: string;
    background?: string;
    effects?: Array<TEffects>;
};
type ColorsName = string;

type TColors = {
    [col in ColorsName]: string;
};

type TEffects = keyof typeof effects;
type TMarkdowmOptions = {
    bold: boolean;
    italic: boolean;
    mono: boolean;
    link: string;
    blockquote: boolean;
};
type TOptions = Partial<TMarkdowmOptions & TColorOptions>;

export type { ColorsName, TColors, TEffects, TColorOptions, TMarkdowmOptions, TOptions };