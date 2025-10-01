// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "../../../styles/gutter";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 16px;

    ${pageGutter};
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
`;

export const Description = styled.p`
    text-align: center;
    font-size: 20px;
`;
