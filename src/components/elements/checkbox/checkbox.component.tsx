// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, Label } from "./checkbox.styles";

// Types
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label }) => {
    return (
        <Container>
            <input type="checkbox" id={label} />

            <Label htmlFor={label}>{label}</Label>
        </Container>
    );
};
