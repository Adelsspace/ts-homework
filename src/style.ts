import { color, ColorOptions } from './colors';
import { markdown, mdOptionsList, MarkdownOptions } from './md';
import { colors, Color } from './model';

type Options = MarkdownOptions | ColorOptions;
function isMarkdownOptions(options: Options): options is MarkdownOptions {
    return mdOptionsList.some(key => key in options);
}
function styleImpl(text: string, options: Options) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if (isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}
const colorsObj = new Map(colors.map(color => [color, (text: string) => console.log(style(text, { font: color }))]));
export const style = Object.assign(styleImpl, {
    log: (text: string, options: Options) => {
        console.log(style(text, options));
    },
    color: (x: Color) => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
