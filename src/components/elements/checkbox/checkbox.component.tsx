// Dependencies
import { FunctionComponent } from "react";

// Styles
import { CheckboxElement, Container, Label } from "./checkbox.styles";

// Types
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label, value, checked, checkedIconElement, handleChange }) => {
    return (
        <Container>
            <input type="checkbox" id={label} checked={checked} onChange={handleChange} value={value} />

            <CheckboxElement isChecked={checked} onClick={handleChange}>
                {checked && checkedIconElement}
            </CheckboxElement>

            <Label htmlFor={label}>{label}</Label>
        </Container>
    );
};
