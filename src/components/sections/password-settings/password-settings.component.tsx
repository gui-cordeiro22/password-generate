// Dependencies
import { FunctionComponent } from "react";

// Styles
import { ButtonWrapper, Container } from "./password-settings.styles";

// Types
import { PasswordSettingsProps } from "./password-settings.types";

export const PasswordSettings: FunctionComponent<PasswordSettingsProps> = ({
    passwordVisualizerCompositions,
    customPasswordOptionsCompositions,
    copyPasswordButtonCompositions,
}) => {
    return (
        <Container>
            {passwordVisualizerCompositions}

            {customPasswordOptionsCompositions}

            <ButtonWrapper>{copyPasswordButtonCompositions}</ButtonWrapper>
        </Container>
    );
};
