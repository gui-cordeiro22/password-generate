// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "../../../styles/gutter";

export const InputTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(132, 148, 165, 0.2);
    border-radius: 8px;
    gap: 8px;
    width: 100%;
    max-width: 768px;

    ${pageGutter}
`;

export const InputTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
`;

export const InputTextElement = styled.input`
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    border: none;
    outline: none;
    cursor: default;
    height: 52px;
    width: 100%;
    transition: all 0.2s ease-in-out;
    user-select: none;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;

    svg {
        cursor: pointer;
    }
`;
