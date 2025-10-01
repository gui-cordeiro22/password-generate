// Types
import { ReactNode } from "react";

export type CustomPasswordOptionsData = {
    title: string;
    passwordLengthLabel: string;
};

export type CustomPasswordOptionsElement = {
    inputRangeElementCompositions: ReactNode;
    optionsElements: ReactNode;
};

export type CustomPasswordOptionsProps = CustomPasswordOptionsData & CustomPasswordOptionsElement;
