// Dependencies
import { FunctionComponent } from "react";

// Types
import { InputRangeProps, InputTextProps } from "./input.types";

export const InputText: FunctionComponent<InputTextProps> = ({ value }) => {
    return <input type="text" defaultValue={value} />;
};

export const InputRange: FunctionComponent<InputRangeProps> = ({ ref, handleChange: onChange, defaultValue = 8 }) => {
    return <input ref={ref} type="range" min="4" max="64" defaultValue={defaultValue} onChange={(e) => onChange?.(Number(e.target.value))} />;
};
