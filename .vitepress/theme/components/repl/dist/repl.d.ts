import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import * as defaultCompiler from 'vue/compiler-sfc';
import { DefineComponent } from 'vue';
import { PropType } from 'vue';
import { SFCAsyncStyleCompileOptions } from 'vue/compiler-sfc';
import { SFCScriptCompileOptions } from 'vue/compiler-sfc';
import { SFCTemplateCompileOptions } from 'vue/compiler-sfc';
import { VNodeProps } from 'vue';
import { vueCompilerSfc } from 'vue/compiler-sfc';

export declare function compileFile(store: Store, { filename, code, compiled }: File_2): Promise<void>;

declare class File_2 {
    filename: string;
    code: string;
    hidden: boolean;
    compiled: {
        js: string;
        css: string;
        ssr: string;
    };
    constructor(filename: string, code?: string, hidden?: boolean);
}
export { File_2 as File }

export declare type OutputModes = 'preview' | 'js' | 'css' | 'ssr';

export declare const Repl: DefineComponent<    {
store: {
type: PropType<Store>;
} & {
default: () => ReplStore;
};
autoResize: {
type: PropType<boolean>;
} & {
default: boolean;
};
showCompileOutput: {
type: PropType<boolean>;
} & {
default: boolean;
};
showImportMap: {
type: PropType<boolean>;
} & {
default: boolean;
};
clearConsole: {
type: PropType<boolean>;
} & {
default: boolean;
};
sfcOptions: {
type: PropType<SFCOptions>;
};
layout: {
type: PropType<string>;
};
}, () => void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
store?: unknown;
autoResize?: unknown;
showCompileOutput?: unknown;
showImportMap?: unknown;
clearConsole?: unknown;
sfcOptions?: unknown;
layout?: unknown;
} & {
store: Store;
showCompileOutput: boolean;
autoResize: boolean;
showImportMap: boolean;
clearConsole: boolean;
} & {
layout?: string | undefined;
sfcOptions?: SFCOptions | undefined;
}>, {
store: Store;
showCompileOutput: boolean;
autoResize: boolean;
showImportMap: boolean;
clearConsole: boolean;
}>;

export declare class ReplStore implements Store {
    state: StoreState;
    compiler: typeof defaultCompiler;
    options?: SFCOptions;
    initialShowOutput: boolean;
    initialOutputMode: OutputModes;
    private defaultVueRuntimeURL;
    private pendingCompiler;
    constructor({ serializedState, defaultVueRuntimeURL, showOutput, outputMode }?: {
        serializedState?: string;
        showOutput?: boolean;
        outputMode?: OutputModes | string;
        defaultVueRuntimeURL?: string;
    });
    setActive(filename: string): void;
    addFile(fileOrFilename: string | File_2): void;
    deleteFile(filename: string): void;
    serialize(): string;
    getFiles(): Record<string, string>;
    setFiles(newFiles: Record<string, string>, mainFile?: string): Promise<void>;
    private initImportMap;
    getImportMap(): any;
    setImportMap(map: {
        imports: Record<string, string>;
        scopes?: Record<string, Record<string, string>>;
    }): void;
    setVueVersion(version: string): Promise<void>;
    resetVueVersion(): void;
}

export declare interface SFCOptions {
    script?: Omit<SFCScriptCompileOptions, 'id'>;
    style?: SFCAsyncStyleCompileOptions;
    template?: SFCTemplateCompileOptions;
}

export declare interface Store {
    state: StoreState;
    options?: SFCOptions;
    compiler: vueCompilerSfc;
    setActive: (filename: string) => void;
    addFile: (filename: string | File_2) => void;
    deleteFile: (filename: string) => void;
    getImportMap: () => any;
    initialShowOutput: boolean;
    initialOutputMode: OutputModes;
}

export declare interface StoreState {
    mainFile: string;
    files: Record<string, File_2>;
    activeFile: File_2;
    errors: (string | Error)[];
    vueRuntimeURL: string;
}

export { }
