/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
declare namespace pxt.editor {
    class DrumSequencer extends Blockly.Field implements Blockly.FieldCustom {
        isFieldCustom_: boolean;
        private params;
        private boardElement;
        private gridElement_;
        private allBeats_;
        static NUM_BEATS: number;
        static NUM_TRACKS: number;
        static imageWidth: number;
        static imageHeight: number;
        constructor(text: string, params: any, validator?: Function);
        /**
         * Show the inline free-text editor on top of the text.
         * @private
         */
        showEditor_(): void;
        initGrid(): void;
        private isInFlyout();
        render_(): void;
        isActive(beatBox: SVGElement): boolean;
        onBoxClicked(e: Event, beatBox: SVGElement, id: number): void;
        getValue(): string;
        emptySequenceString(): string;
        getValueString(): string;
        getValueArray(): string;
    }
}
declare namespace pxt.editor {
}
declare namespace pxt.editor {
    class MelodySequencer extends Blockly.Field implements Blockly.FieldCustom {
        isFieldCustom_: boolean;
        private params;
        private boardElement;
        private gridElement_;
        private allBeats_;
        static NUM_BEATS: number;
        static NUM_TRACKS: number;
        static imageWidth: number;
        static imageHeight: number;
        constructor(text: string, params: any, validator?: Function);
        /**
         * Show the inline free-text editor on top of the text.
         * @private
         */
        showEditor_(): void;
        initGrid(): void;
        private isInFlyout();
        render_(): void;
        isActive(beatBox: SVGElement): boolean;
        onBoxClicked(e: Event, beatBox: SVGElement, id: number): void;
        getValue(): string;
        emptySequenceString(): string;
        getValueString(): string;
        getValueArray(): string;
    }
}
