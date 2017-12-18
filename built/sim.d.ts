/// <reference path="../libs/core/enums.d.ts" />
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
/// <reference path="../typings/globals/three/index.d.ts" />
/// <reference path="../typings/globals/peerjs/index.d.ts" />
/// <reference path="../typings/globals/three-vreffect/index.d.ts" />
/// <reference path="../sim/aframe.d.ts" />
/// <reference path="../sim/threex.d.ts" />
declare namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    function forever(body: RefAction): void;
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    function pauseAsync(ms: number): Promise<void>;
}
declare function logMsg(m: string): void;
declare namespace pxsim.console {
    /**
     * Print out message
     */
    function log(msg: string): void;
}
declare namespace pxsim {
    interface Position {
        x: number;
        y: number;
        z: number;
    }
    class ArMarker {
        private value;
        worldPosition: Position;
        worldRotation: Position;
        constructor(value: number);
    }
}
declare namespace pxsim.colors {
    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    function rgb(red: number, green: number, blue: number): number;
    /**
     * Get the RGB value of a known color
    */
    function named(color: Colors): number;
}
declare namespace pxsim.design {
    /**
     * Sets the text  that displays when the marker is detected
     */
    function setText(marker: number, text: string): void;
    /**
     * Sets the number that displays when the marker is detected
     */
    function setNumber(marker: number, number: number): void;
    /**
     * Sets the shape that displays when the marker is detected
     */
    function setShape(marker: number, shape: Shape): void;
    /**
     * Sets the model that displays when the marker is detected. Takes in a string of the 3D model.
     */
    function setModel(marker: number, type: ModelType, content: string): void;
    /**
     * Sets the color that displays when the marker is detected
     */
    function setColor(marker: number, color: number): void;
    /**
     * Sets the opacity of the shape that is displayed on the marker. 0 is invisible, 1 is fully opaque.
     * @param value How opaque the shape should be between 0 and 1, eg: 0.9
     */
    function setOpacity(marker: number, value: number): void;
    /**
     * Sets the text color that displays when the marker is detected
     */
    function setTextColor(marker: number, color: number): void;
    /**
     * Sets the size of the 3D object that is rendered. Shapes will automatically have a default scale value of 1.
     * @param size The amount to scale the model by, eg: 1
     */
    function setScale(marker: number, size: number): void;
    /**
     * Sets the size of the 3D object that is rendered. Shapes will automatically have a default scale value of (1, 1, 1).
     * @param x The amount to scale the model in the x direction, eg: 1
     * @param y The amount to scale the model in the y direction, eg: 1
     * @param z The amount to scale the model in the z direction, eg: 1
     */
    function setScale3D(marker: number, x: number, y: number, z: number): void;
    /**
     * Sets the position of the 3D object that is rendered in relation to the marker. Shapes will automatically have a default position of (0, 0, 0).
     */
    function setPosition(marker: number, x: number, y: number, z: number): void;
    /**
     * Sets the rotation of the 3D object that is rendered in relation to the marker. Shapes will automatically have a default rotation of 0°.
     */
    function setRotation(marker: number, degrees: number): void;
    /**
     * Sets the rotation of the 3D object that is rendered in relation to the marker. Shapes will automatically have a default rotation of (0, 0, 0).
     */
    function setRotation3D(marker: number, x: number, y: number, z: number): void;
    /**
     * Sets the filter of the video feed.
     */
    function addFilter(filter: Filter): void;
    /**
     * Sets the filter of the video feed.
     */
    function removeFilter(filter: Filter): void;
    function addFilterHelper(filter: string): void;
    function removeFilterHelper(filter: string): void;
    function removeAllFilters(): void;
}
declare namespace font {
    let helvetiker_regular: {
        "glyphs": {
            "0": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "1": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "2": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "3": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "4": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "5": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "6": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "7": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "8": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "9": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ο": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "S": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¦": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "/": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Τ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "y": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Π": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ΐ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "g": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "²": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "–": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Κ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ƒ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "e": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ό": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "J": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "»": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "©": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ώ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "^": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "«": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "D": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "∙": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ÿ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "w": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "$": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "\\": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "µ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ι": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ύ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "’": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ν": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "-": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Q": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ς": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "M": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ψ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "C": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "!": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "{": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "X": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "#": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ι": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ά": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ")": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ε": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Δ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "}": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "‰": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "a": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "—": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "=": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "N": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ρ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¯": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Z": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "u": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "k": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Η": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Α": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "s": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "B": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "…": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "?": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "H": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ν": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "c": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¶": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "β": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Μ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ό": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ή": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "•": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¥": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "(": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "U": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "γ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "α": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "F": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "­": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ":": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Χ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "*": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "†": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "°": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "V": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ξ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            " ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
            };
            "Ϋ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "”": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "@": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ί": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "i": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Β": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "υ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "]": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "m": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "χ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ί": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ζ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "R": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "o": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "K": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ",": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "d": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¨": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "E": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Y": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "\"": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "‹": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "„": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "δ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "έ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ω": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "´": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "±": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "|": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ϋ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "§": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "b": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "q": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ω": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ύ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "z": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "™": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ή": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Θ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "®": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "~": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ε": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "³": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "[": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "L": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "σ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ζ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "θ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ο": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Γ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            " ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
            };
            "%": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "P": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Έ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ώ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "_": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ϊ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "+": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "½": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Ρ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "'": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ª": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "΅": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "T": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Φ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "⁋": {
                "x_min": number;
                "x_max": number;
                "ha": number;
            };
            "j": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Σ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "›": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "<": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "£": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "t": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¬": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "λ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "W": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ">": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "v": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "τ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ξ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "&": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Λ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "I": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "G": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ΰ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "`": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "·": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "Υ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "r": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "x": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "μ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "h": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ".": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "φ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            ";": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "f": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "“": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "A": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "‘": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ϊ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "π": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ά": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "O": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "n": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "l": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "¤": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "κ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "p": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "‡": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "ψ": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
            "η": {
                "x_min": number;
                "x_max": number;
                "ha": number;
                "o": string;
            };
        };
        "cssFontWeight": string;
        "ascender": number;
        "underlinePosition": number;
        "cssFontStyle": string;
        "boundingBox": {
            "yMin": number;
            "xMin": number;
            "yMax": number;
            "xMax": number;
        };
        "resolution": number;
        "original_font_information": {
            "postscript_name": string;
            "version_string": string;
            "vendor_url": string;
            "full_font_name": string;
            "font_family_name": string;
            "copyright": string;
            "description": string;
            "trademark": string;
            "designer": string;
            "designer_url": string;
            "unique_font_identifier": string;
            "license_url": string;
            "license_description": string;
            "manufacturer_name": string;
            "font_sub_family_name": string;
        };
        "descender": number;
        "familyName": string;
        "lineHeight": number;
        "underlineThickness": number;
    };
}
declare namespace pxsim.interaction {
    /**
     * Allows use to define callbacks for a marker event
     * @param marker
     * @param event
     */
    function onEvent(marker: number, event: MarkerEvent, handler: RefAction): void;
    /**
     * Allows use to define callbacks for a marker event
     * @param marker
     * @param event
     */
    function whileEvent(marker: number, event: MarkerLoopEvent, handler: RefAction): void;
    /**
     * Allows user to define callbacks that fire while the multi marker event is true
     * @param marker1
     * @param marker2
     * @param event
     */
    function whileMultiEvent(marker1: number, event: MultiMarkerEvent, marker2: number, handler: RefAction): void;
    /**
     * Allows user to define callbacks that trigger once when the multi marker event is true
     * @param marker1
     * @param marker2
     * @param event
     */
    function onMultiEvent(marker1: number, event: MultiMarkerEvent, marker2: number, handler: RefAction): void;
}
declare namespace pxsim.markers {
    /**
     * Gets the distance between the centers of 2 markers
     */
    function distance(marker1: number, marker2: number): number;
    /**
     * Gets the x, y, z positional coordinates of a marker
     */
    function position(marker: number, axis: Axes): number;
    /**
     * Gets the x, y, z rotational values of a marker
     */
    function rotation(marker: number, axis: Axes): number;
    /**
     * Maps the x, y, or z position of a marker to a specified range.
     * @param out_min The lower end of the range to map to, eg: 0
     * @param out_max The upper end of the range to map to, eg: 100
     */
    function mapPosition(marker: number, axis: Axes, out_min: number, out_max: number): number;
    /**
     * Maps the x, y, or z position of a marker to a specified range. When you rotate the marker, the lowest value will be when the marker is in it's normal orientation and will get higher as you turn it clockwise.
     * @param out_min The lower end of the range to map to, eg: 0
     * @param out_max The upper end of the range to map to, eg: 100
     */
    function mapRotation(marker: number, out_min: number, out_max: number): number;
    /**
     * Maps the value of 1 marker in relation to its distance between 2 markers.
     */
    function slider(marker1: number, marker2: number, marker3: number): number;
    class Marker {
        private code_;
        private group_;
        private prevWorldPos_;
        private prevPos_;
        private prevRot_;
        private prevVisible_;
        private prevVisibleTime_;
        private prevHiddenTime_;
        private color_;
        private opacity_;
        private fontColor_;
        private brushColor_;
        private brushWidth_;
        private scaleX_;
        private scaleY_;
        private scaleZ_;
        private autoScale_;
        private posX_;
        private posY_;
        private posZ_;
        private rotX_;
        private rotY_;
        private rotZ_;
        private neighbors_;
        private paintGroup_;
        private painting_;
        constructor(code: MarkerCode, color: number);
        triggerEvents(): void;
        neighbor(i: number, dist: string): boolean;
        setNeighborDist(index: number, dist: string): void;
        cueTouching(marker: Marker, event?: string): void;
        cueClose(marker: Marker, event?: string): void;
        cueFar(marker: Marker, event?: string): void;
        checkNeighbors(): void;
        /**
         * Update previous and current AR marker state values
         */
        updateState(): void;
        paint(): void;
        clearBrushStrokes(): void;
        initControls(): THREE.Group;
        textObject(): THREE.Object3D;
        shapeObject(): THREE.Object3D;
        code(): MarkerCode;
        group(): THREE.Group;
        position(): THREE.Vector3;
        worldPosition(): THREE.Vector3;
        prevPosition(): THREE.Vector3;
        rotation(): THREE.Quaternion;
        prevRotation(): THREE.Quaternion;
        prevVisible(): boolean;
        prevVisibleTime(): number;
        prevHiddenTime(): number;
        color(): number;
        opacity(): number;
        fontColor(): number;
        brushColor(): number;
        brushWidth(): number;
        scaleX(): number;
        scaleY(): number;
        scaleZ(): number;
        posX(): number;
        posY(): number;
        posZ(): number;
        rotX(): number;
        rotY(): number;
        rotZ(): number;
        visible(): boolean;
        painting(): boolean;
        setPrevVisibleTime(time: number): void;
        setColor(color: number): void;
        setOpacity(opacity: number): void;
        setFontColor(color: number): void;
        setBrushColor(color: number): void;
        setBrushWidth(thickness: number): void;
        setScale(x: number, y?: number, z?: number): void;
        setAutoScale(value: number): void;
        setPosition(x: number, y: number, z: number): void;
        setRotation(x: number, y?: number, z?: number): void;
        addNeighbor(neighbor: any[]): void;
        setPainting(val: boolean): void;
    }
}
declare namespace pxsim.messaging {
    /**
     * Peer
     * @param id The value of the marker
     */
    function send(key: string, value: number, id: string): void;
    /**
     * Allows user to define callbacks for receive event
     * @param key
     */
    function receive(key: string, handler: RefAction): void;
}
declare namespace pxsim.paint {
    /**
     * Use a marker as an AR paintbrush..
     */
    function setBrushMode(marker: number, val: Toggle): void;
    /**
     * Set the color of your AR paintbrush.
     */
    function setBrushColor(marker: number, color: number): void;
    /**
     * Clear all strokes made by your AR paintbrush.
     */
    function clearBrushStrokes(marker: number): void;
}
declare namespace pxsim {
    /**
     * Gets the current 'board', eg. program state.
     */
    function board(): Board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        bus: pxsim.EventBus;
        font: THREE.Font;
        scene: THREE.Scene;
        camera: THREE.Camera;
        markers: pxsim.Map<pxsim.markers.Marker>;
        markerColors: Array<number>;
        arToolkitContext: THREEx.ArToolkitContext;
        arToolkitSource: THREEx.ArToolkitSource;
        renderer: THREE.WebGLRenderer;
        stereoRenderer: any;
        mirror: boolean;
        vrEffect: boolean;
        baseURL: string;
        onRenderFcts: Array<any>;
        constructor();
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void>;
        /**
         * Define functions that we want to run on every render loop
         */
        initRenderFunctions(): void;
        initMarkers(): void;
        runRenderingLoop(): void;
        kill(): void;
        /**
         * Gets or creates a new marker
         * @param marker
         */
        marker(marker: MarkerCode): pxsim.markers.Marker;
    }
}
declare namespace pxsim.three {
    function createScene(): THREE.Scene;
    function createCamera(): THREE.Camera;
    /**
     * A light source that sits in the "front" of the scene
     * and creates highlights and shadows on an object's
     * material depending on the position
     */
    function createDirectionalLight(): THREE.DirectionalLight;
    /**
     * A light source that comes from all directions, creates
     * an evenly diffused light source for the scene
     */
    function createAmbientLight(): THREE.AmbientLight;
    /**
     * Call the proper THREE Geometry constructor
     * based on the user's shape selection
     * @param shape
     */
    function createGeometry(shape: Shape): THREE.Geometry;
    /**
     * Helpers to create different THREE Geometries
     * The dimensions create shapes that fit within
     * the boundry of the AR marker
     */
    function createBox(): THREE.Geometry;
    function createSphere(): THREE.Geometry;
    function createCone(): THREE.Geometry;
    function createCylinder(): THREE.Geometry;
    function createTetrahedron(): THREE.Geometry;
    function createIcosahedron(): THREE.Geometry;
    function createPlane(): THREE.Geometry;
    function createLine(v1: THREE.Vector3, v2: THREE.Vector3, color: number): THREE.Line;
    /**
     * Creates a solid colored plane in a particular marker group
     * @param marker
     * @param color
     */
    function createBillboard(marker: MarkerCode, color: number): THREE.Mesh;
    function createText(text: string, color: number, marker: MarkerCode): THREE.Mesh;
    function removeTextFromMarker(marker: MarkerCode): void;
    function removeShapeFromMarker(marker: MarkerCode): void;
    /**
     * Remove a particular object by name from a group
     * @param group
     * @param obj
     */
    function removeObjectFromGroup(group: THREE.Group, obj: THREE.Object3D): void;
    /**
     * Removes all objects and child objects from scene
     * @param scene
     */
    function removeSceneChildren(scene: THREE.Scene): void;
    function loadFontAsync(url: string): Promise<String>;
    function parseFont(typeface: any): THREE.Font;
    function loadModel(type: ModelType, content: string): THREE.Object3D;
}
declare namespace pxsim.threex {
    function createMarkerControls(marker: MarkerCode, markerRoot: THREE.Group): THREEx.ArMarkerControls;
    function initArToolkit(): void;
}
