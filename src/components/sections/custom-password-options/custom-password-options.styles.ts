// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(132, 148, 165, 0.2);
    border-radius: 8px;
    gap: 16px;
    width: 100%;
    max-width: 768px;

    padding: 24px;
    margin: 24px auto;

    @media (min-width: 768px) {
        max-width: 677px;
        padding: 40px;
        margin: 40px auto;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
        padding: 80px 40px;
        margin: 80px auto;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
        padding: 80px 76px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
    width: 100%;
`;

export const Title = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #f0f0f0;
`;

export const Label = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: normal;
`;

export const InputCompositionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    width: 100%;
`;

export const OptionsElementsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
`;
