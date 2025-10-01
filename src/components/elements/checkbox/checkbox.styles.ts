// Dependencies
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input {
        visibility: hidden;
    }
`;

type CheckboxStylesProps = {
    isChecked?: boolean;
};

export const CheckboxElement = styled.div<CheckboxStylesProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: 1px solid #828282;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    ${({ isChecked }) =>
        isChecked &&
        css`
            background-color: #9b51e0;
            border: none;
        `}
`;

export const Label = styled.label`
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
`;
