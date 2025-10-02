// Dependencies
import styled, { css } from "styled-components";

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
    percent: number;
};

export const BarElement = styled.div<BarElementStyleProps>`
    height: 10px;
    border-radius: 0 8px 8px 8px;
    width: ${({ percent }) => percent}%;
    transition: all 0.3s ease-in-out;

    ${({ percent }) =>
        percent === 100 &&
        css`
            background-color: #4caf50;
            border-radius: 0px 0px 8px 8px;
        `}

    ${({ percent }) =>
        percent > 80 &&
        css`
            background-color: #4caf50;
        `}

    ${({ percent }) =>
        percent <= 80 &&
        css`
            background-color: #ffa500;
        `}

    ${({ percent }) =>
        percent <= 30 &&
        css`
            background-color: #ff4d4d;
        `}
`;
