import { Container, Title, Header, Section, Buttons, Button, New} from "./style";
import {Footer, Value, Transaction, Date, Description, Text} from "./style.jsx";
import { RiLogoutBoxRLine} from "react-icons/ri"
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";

export default function Home(){
    const navigate = useNavigate();
    const {token} = useContext(UserContext);
    const [userData, setUserData] = useState();

    useEffect(() => !token && navigate("/"), [token, navigate]);

    useEffect(() => {
        const URL_USER = `${process.env.REACT_APP_API_URL}/user`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.get(URL_USER, config);

        request.then(response => {setUserData(response.data)});
        request.catch(error => console.log(error));
    }, [token]);
    
    function logOut() {
        const URL_LOGOUT = `${process.env.REACT_APP_API_URL}/log-out`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.delete(URL_LOGOUT, config);

        request.then(() => navigate("/"));
        request.catch(error => console.log(error));
    }

    return (
        <Container>
            <Header>
                <Title> Olá, {userData?.name}</Title>
                <RiLogoutBoxRLine size={26} cursor="pointer" color="#FFFFFF" onClick={logOut}/>
            </Header>
            <Section>

                {userData?.transactions.length===0 && <Text>Não há registros de entrada ou saída</Text>}
                
                {userData?.transactions.length!==0 && userData?.transactions.map(transaction => 
                    <Fragment  key={transaction.id}>
                        <Transaction>
                            <Date>{transaction.createAt}</Date>
                            <Description>{transaction.description}</Description>
                            <Value type={transaction.type==="in"}>{parseFloat(transaction.amount).toFixed(2).replace(".",",")}</Value>
                        </Transaction>
                        <Footer>
                            Saldo 
                            <Value type={parseFloat(userData?.amount)>=0}>
                                {(parseFloat(userData?.amount)<0) ? (parseFloat((-1)*(userData?.amount)).toFixed(2).replace(".", ","))
                                : parseFloat(userData?.amount).toFixed(2).replace(".", ",")}
                            </Value>
                        </Footer>
                    </Fragment>
                )}

            </Section>
            <Buttons>
                <Button onClick={() => navigate("/new-in")}>
                    <AiOutlinePlusCircle size={22} color="#FFFFFF"/>
                    <New>Nova entrada</New>
                </Button>
                <Button onClick={() => navigate("/new-out")}>
                    <AiOutlineMinusCircle size={22} color="#FFFFFF"/>
                    <New>Nova saída</New>
                </Button>
            </Buttons>

        </Container>
    );
}