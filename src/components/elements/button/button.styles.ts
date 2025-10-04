// Dependencies
import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #bb6bd9;
    color: #fff;
    font-size: 1rem;
    border-radius: 8px;
    gap: 16px;
    padding: 1rem 2rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #9b51e0;
    }

    @media (min-width: 768px) {
        font-size: 1.25rem;
        width: fit-content;
    }
`;
