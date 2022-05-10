import { Container, Title } from "./style";
import {Form, Input, Button} from "./../../assets/styles/style.jsx";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function NewOut(){
    const navigate = useNavigate();
    const {token, updateTransactions} = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [transactionData, setTransactionData] = useState({amount:"", description: "", type:"out"});

    useEffect(() => !token && navigate("/"), [token, navigate]);

    function newOutTransaction(e){
        e.preventDefault();
        const URL_NEWOUT = "http://localhost:5000/user/transactions";
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const body = {...transactionData, amount: parseFloat(transactionData.amount.replace(",",".")).toFixed(2)};
        const request = axios.post(URL_NEWOUT, body, config);
        setDisabled(true);
        request.then(() => {navigate("/home");
                            updateTransactions();});
        request.catch(e => {setDisabled(false);
                            alert(`${e}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Title>Nova saída</Title>

            <Form onSubmit={newOutTransaction}>
                <Input type="text" placeholder="Valor" disabled={disabled} 
                required value={transactionData.amount} 
                onChange={e => setTransactionData({...transactionData,
                amount: e.target.value})}/>
                
                <Input type="text" placeholder="Descrição"  disabled={disabled} 
                required title="Descreva a transação." 
                value={transactionData.description} onChange={e => setTransactionData({...transactionData,
                description: e.target.value})}/>
                
                <Button type="submit" disabled={disabled}>
                {disabled ? <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/> 
                    : "Salvar entrada" }
                </Button>
            </Form>
        </Container>
    );
}