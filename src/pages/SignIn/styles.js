import styled from "styled-components";

import imgLogin from '../../assets/imgLogin.jpeg'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; /*stretch = distribuicao*/
`;

export const Form = styled.Form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin: 48 0px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }
`; 

export const img = styled.div `
    flex: 1;
    background: url(${imgLogin}) no-repeat center center;
    background-size: cover;
    
`
