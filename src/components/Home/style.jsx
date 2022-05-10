import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100%;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`;
export const Title = styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
`;

export const Section = styled.section`
    width: 100%;
    height: calc(100vh - 230px);
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 23px;
    gap: 15px;
`;
export const Buttons = styled.section`
    width: 100%;
    height: 156px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Button = styled.button`
    width: calc((100% - 15px)/2);
    height: 114px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
`;  
export const New = styled.h2`
    width: 64px;
    height: 40px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    text-align: start;
    color: #FFFFFF;
`;
export const Footer = styled.footer`
    width: calc(100% - 24px);
    height: 30px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    color: #000000;
`;
export const Value = styled.p`
width: 62px;
font-family: 'Raleway';
font-weight: 400;
font-size: 17px;
text-align: right;
color: ${props => props.type ?"#03AC00" : "#C70000;"};
`;
export const Transaction = styled.p`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;
`;
export const Date = styled.p`
    width: 50px;
    font-family: 'Raleway';
    font-size: 16px;
    color: #C6C6C6;
`;
export const Description = styled.p`
    width: calc(100% - 120px);
    font-family: 'Raleway';
    font-size: 16px;
    text-align: left;
    color: #000000;
`;
export const Text = styled.p`
    width: 70%;
    height: 44px;
    font-family: 'Raleway';
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    position: absolute;
    top: calc(50% - 22px);
`;