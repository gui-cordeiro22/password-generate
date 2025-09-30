// Dependencies
import { FunctionComponent } from "react";

// Types
import { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({ label, handleClick }) => {
    return <button onClick={handleClick}>{label}</button>;
};
