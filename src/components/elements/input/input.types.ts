// Types
import { Ref } from "react";

export type InputTextData = {
    value: string;
};

export type InputTextProps = InputTextData;

export type InputRangeData = {
    ref?: Ref<HTMLInputElement>;
    defaultValue?: number;
};

export type InputRangeActions = {
    handleChange?: (value: number) => void;
};

export type InputRangeProps = InputRangeData & InputRangeActions;
