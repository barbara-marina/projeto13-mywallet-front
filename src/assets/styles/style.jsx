import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;
export const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
`;
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
`;
export const Input = styled.input`
    width: 100%;
    height: 58px;
    border:none;
    background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
    border-radius: 5px;
    padding-left: 10px;
    font-family: 'Raleway';
    font-size: 20px;
    color: #000000;
    &&::placeholder {
    font-family: 'Raleway';
    font-size: 20px;
    color: ${props => props.disabled ? '#AFAFAF' : '#000000'};
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #A328D6;;
    ${props => props.disabled && 'opacity: 0.7' };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const Forward = styled(Link)`
    font-family: 'Raleway';
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    margin-top: 36px;
    cursor: pointer;
`;