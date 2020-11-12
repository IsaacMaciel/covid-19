import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const Container = styled.div`
    padding: 30px;
    width: 100%;
    height: 56px;

    text-align: center;
`;

export const Text = styled.h4`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

export const Img = styled.img`
    width: 75px;
    height: 75px;
    color: red;
    animation: ${rotate} 20s linear infinite;
`;
