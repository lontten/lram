declare let line: any;
declare let txt: any;
declare let color: any;
declare let katex: any;
declare let code: any;
declare const parserMap: {};
declare const innerFun: {};
declare const renderMap: {};
declare class Cen {
    constructor();
    use(f: any): void;
    render(str: any): string;
}
declare function render(token: any): any;
declare function coreTran(lineData: any, preToken: any): string;
declare function log(ss: any): string;
declare let cen: Cen;
