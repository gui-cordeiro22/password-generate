// Dependencies
import { FunctionComponent } from "react";

export const InputText: FunctionComponent = () => {
    return <input type="text" />;
};

export const InputRange: FunctionComponent = () => {
    return <input type="range" value={16} min={4} max={64} />;
};
