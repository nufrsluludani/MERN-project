import { Palette , PaletteColor } from "@mui/material/styles/createPalette";

// extending settings that don't exist 

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}