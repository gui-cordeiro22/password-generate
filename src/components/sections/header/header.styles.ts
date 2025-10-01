// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "../../../styles/gutter";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 16px;

    ${pageGutter};
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: #000;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

export const Description = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    text-align: center;
    color: #828282;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;
