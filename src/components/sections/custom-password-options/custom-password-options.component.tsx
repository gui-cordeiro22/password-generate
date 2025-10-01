// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, Divider, InputCompositionsWrapper, Label, OptionsElementsWrapper, Title } from "./custom-password-options.styles";

// Types
import { CustomPasswordOptionsProps } from "./custom-password-options.types";

export const CustomPasswordOptions: FunctionComponent<CustomPasswordOptionsProps> = ({
    title,
    passwordLengthLabel,
    inputRangeElementCompositions,
    optionsElements,
}) => {
    return (
        <Container>
            <Title>{title}</Title>

            <Divider />

            <ContentWrapper>
                <InputCompositionsWrapper>
                    <Label>{passwordLengthLabel}</Label>

                    {inputRangeElementCompositions}
                </InputCompositionsWrapper>

                <OptionsElementsWrapper>{optionsElements}</OptionsElementsWrapper>
            </ContentWrapper>
        </Container>
    );
};
