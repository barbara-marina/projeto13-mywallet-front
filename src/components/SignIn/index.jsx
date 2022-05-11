import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../contexts/UserContext.jsx";
import { Container, Logo, Form, Input, Button, Forward } from "../../assets/styles/style.jsx";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function SignIn(){
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext);
    const [userData, setUserData] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);

    function signIn(e) {
        e.preventDefault();
        const URL_SIGNIN = `${process.env.REACT_APP_API_URL}/sign-in`;
        const request = axios.post(URL_SIGNIN, userData);
        setDisabled(true);
        request.then(response => {setToken(response.data);
                                navigate("/home");
        });
        request.catch(error => {setDisabled(false);
                                alert(`${error}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={signIn}>
                <Input type="email" placeholder="E-mail" value={userData.email} 
                onChange={e => setUserData({...userData, email:e.target.value})} 
                disabled={disabled} pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido" required/>
                <Input type="password" placeholder="Senha" value={userData.password} 
                onChange={e => setUserData({...userData, password:e.target.value})} 
                disabled={disabled} required/>
                <Button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots size={60} color="#FFFFFF" ariaLabel="loading"/> : "Entrar" }
                </Button>
            </Form>
            <Forward to="/sign-up">Primeira vez? Cadastre-se!</Forward>
        </Container>
    );
}