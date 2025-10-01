// Dependencies
import { FunctionComponent } from "react";

// Styles
import { ButtonsWrapper, InputRangeElement, InputTextContainer, InputTextElement, InputTextWrapper } from "./input.styles";

// Types
import { InputRangeProps, InputTextProps } from "./input.types";

export const InputText: FunctionComponent<InputTextProps> = ({
    value,
    copyButtonElementCompositions,
    regenerateButtonElementCompositions,
    progressBarElementCompositions,
}) => {
    return (
        <InputTextContainer>
            <InputTextWrapper>
                <InputTextElement type="text" defaultValue={value} />

                <ButtonsWrapper>
                    {copyButtonElementCompositions}

                    {regenerateButtonElementCompositions}
                </ButtonsWrapper>
            </InputTextWrapper>

            {progressBarElementCompositions}
        </InputTextContainer>
    );
};

export const InputRange: FunctionComponent<InputRangeProps> = ({ ref, handleChange, defaultValue = 16 }) => {
    return (
        <InputRangeElement
            ref={ref}
            type="range"
            min="4"
            max="64"
            defaultValue={defaultValue}
            onChange={(e) => handleChange?.(Number(e.target.value))}
        />
    );
};
