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
    padding: 24px;

    @media (min-width: 768px) {
        padding: 40px;
    }

    @media (min-width: 1024px) {
        padding: 80px 40px;
    }

    @media (min-width: 1366px) {
        padding: 80px 76px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const Title = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
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
