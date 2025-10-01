// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10px;
    background-color: #ddd;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 8px 8px;
`;

type BarElementStyleProps = {
    variant?: "weak" | "medium" | "strong" | "completed";
};

export const BarElement = styled.div<BarElementStyleProps>`
    height: 10px;
    border-radius: 0 8px 8px 8px;
    background-color: #4caf50;
    width: 80%;
    transition: all 0.3s ease-in-out;
`;
