// Types
import { ReactNode, Ref } from "react";

export type InputTextData = {
    value: string;
};

export type InputTextElements = {
    copyButtonElementCompositions: ReactNode;
    regenerateButtonElementCompositions: ReactNode;
};

export type InputTextProps = InputTextData & InputTextElements;

export type InputRangeData = {
    ref?: Ref<HTMLInputElement>;
    defaultValue?: number;
};

export type InputRangeActions = {
    handleChange?: (value: number) => void;
};

export type InputRangeProps = InputRangeData & InputRangeActions;
