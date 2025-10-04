// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    padding: 24px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 677px;
        padding: 40px;
        gap: 40px;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
        padding: 0px 40px;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
        padding: 0px 76px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
